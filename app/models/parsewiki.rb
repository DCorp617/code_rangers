require 'httparty'

class ParseWiki
  include HTTParty

  def intro(subject, state = false)
    self.class.base_uri "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles="
    if state == true
      subject = subject + " (U.S. state)"
    end
    query_string = subject.gsub(' ','%20')
    wiki_object = self.class.get(query_string)
    page_key = wiki_object['query']['pages'].keys[0]
    wiki_intro = wiki_object['query']['pages'][page_key]["extract"]
    #if wiki_intro is empty, then the wiki query failed. Returns the empty string
    if wiki_intro == ""
      wiki_intro = "There is no information about this place."
    end
    clean_text(wiki_intro)
  end

  def image(subject,picture_size = 400)
    self.class.base_uri "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&redirects=1&format=json&"
    query_string = subject.gsub(' ','%20')
    image_query = "titles=#{query_string}&pithumbsize=#{picture_size}"
    wiki_object = self.class.get(image_query)
    page_key = wiki_object['query']['pages'].keys[0]
    wiki_image = wiki_object['query']['pages'][page_key]["thumbnail"]["source"]
  end

  def clean_text(wiki_intro)
    #check to see if response has newline, indicating a paragraph. If so, extract only the first   paragraph
    if (wiki_intro.include?("\n"))
      #return all indexes in which newline occurs
      new_line_indexes = wiki_intro.enum_for(:scan, /(?=\n)/).map { Regexp.last_match.offset(0).first }
      #if intro length to first new line is too short (less than 200 characters) move to the next new line
      if wiki_intro[0..new_line_indexes[0]].length < 200
        wiki_intro = wiki_intro[0..new_line_indexes[1]]
      else
        wiki_intro = wiki_intro[0..new_line_indexes[0]]
      end
      #split wiki intro paragraph into array of sentences to check for(and remove) parentheses and extra spaces
      intro_sentences = wiki_intro.gsub(/\n|\r/, ' ').split(/\.\s*/)
      edited_sentences = intro_sentences.map do|sentence|
        sentence = sentence.gsub(/\(.*\)/, " ")
        sentence = sentence.gsub(/ +/, " ")
      end
      wiki_intro = edited_sentences.join(". ")
      #sub removes trailing space only after the initial state name
      wiki_intro = wiki_intro.sub(/ +,/, ",")
    else
      #if response had no newlines, pass the whole extract
      intro_sentences = wiki_intro.gsub(/\n|\r/, ' ').split(/\.\s*/)
      edited_sentences = intro_sentences.map do|sentence|
        sentence = sentence.gsub(/\(.*\)/, " ")
        sentence = sentence.gsub(/ +/, " ")
      end
      wiki_intro = edited_sentences.join(". ")
      #sub removes trailing space only after the initial state name
      wiki_intro = wiki_intro.sub(/ +,/, ",")
    end
  end
end
