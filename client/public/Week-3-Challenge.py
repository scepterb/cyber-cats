# This line is a comment. It will be ignored by Python when you run your code.
# Comments begin with '#' in Python.

# You must find: 
#   version (1 byte);   TOS (1 byte);   length (2 bytes, LE); 
#   source address (4 bytes, LE);   destination address (4 bytes, LE);
#   data (34 byte string, BE)

# Print data as a string and everything else as an integer
# Run `./week-3-server` to submit answers

intercepted_packet = b"\x04\x1b1\xd4\xae@t\x0b\xb8\x40t\x0bA llama? \x48\x65\x27\x73 supposed to be dead!"

version = int.from_bytes(??, 'little')

print(version)