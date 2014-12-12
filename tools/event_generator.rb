#
# Convert the reports-messages.properties file to a markdown table
#

source = ARGV[0] || 'reports-messages.properties'
dest = ARGV[1] || '../_includes/event_list.md'

newfile = File.open(dest, "w")

current_key = ""
current_value = ""
File.foreach(source, :encoding => 'iso-8859-1:utf-8') do |line|
	# Check for headings
	if /#\s*[A-z]+[-\s\.A-z0-9]*$/ =~ line

		heading = line[/[a-zA-Z]+[-\s\.a-zA-Z=0-9]*$/]
		heading = heading.split.map! {|word|
			chars = word.split("")
			chars[0].upcase!
			chars.join("")
		}.join(" ")

		newfile.puts("")
		newfile.puts("")
		newfile.puts("##### #{heading}")
		newfile.puts("")
		newfile.puts("ObjectType | Description")
		newfile.puts("--- | ---")

	# Check for content
	elsif line.include? "="
		key, value = line.split("=", 2)
		key.strip!
		value.strip!

		# If value ends in a \, replace \ with a <br \> and get the next line
		if value[-1] == '\\'
			value[-1] = "<br />"
			current_key = key
			current_value += value
		else
			key = key.gsub(/\./, '.<wbr>')
			newfile.puts("#{key} | #{value}")
		end

	# If we're continuing a line
	elsif current_value != ""
		value = line.strip()

		if value[-1] == '\\'
			value[-1] = "<br />"
			current_value += value
		else
			current_value += value
			
			current_key = current_key.gsub(/\./, '.<wbr>')
			newfile.puts("#{current_key} | #{current_value}")
			current_key = current_value = ""
		end
	end
end

newfile.close