require 'httparty'

class ParseWiki
  include HTTParty
  base_uri "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles="

  def state_info(subject)
    state_query = subject + " (U.S. state)"
    query_string = state_query.gsub(' ','%20')
    wiki_object = self.class.get(query_string)
    page_key = wiki_object['query']['pages'].keys[0]
    wiki_intro = wiki_object['query']['pages'][page_key]["extract"]
    #check to see if response has newline, indicating a paragraph. If so, extract only the first paragraph
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
