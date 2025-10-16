# Week 2: Number Representation
(This week's slides are based off of https://en.wikibooks.org/wiki/Digital_Circuits/Representations)  

## Binary
The **_____ ______** or ("base 2") is a number system, just like our decimal system.  

The decimal system uses **__ digits** (0-9). Each digit's value increases by **powers of __**.  
On the other hand, the binary system uses **__ digits** (0 & 1). Each digit's value increases by **powers of __**.  

One binary digit is called a **___**.  
**8** bits make up a **____**.  

## Hex
**_______** (or "base 16") is a number system using 16 digits: 0-9, A, B, C, D, E, F. Programmers represent bytes using hex to make reading it easier.

Example: `0x12FB` = *4859* in decimal. In binary, that's `0b 0001 0010 1111 1011` (Ugly-looking, no?)

BTW: it takes **___** hex characters to represent one byte of data.


#### hex and binary practice
`0x23` = `__` (in decimal)  
`0x1F` = `__`  
`0b1000 0001` = `0x__`   
`0b0000 1010` = `0x__` = `__`  

## Pick Your Challenge:
### Option 1: Practicing Hex and Binary
Somewhere here or on a sheet of paper, convert the following values to the corresponding number system:

`0xFF00` = `0b_______` = `___`  
`0x00FF` = `0b_______` = `___`  

`64` = `0x__`  
`65` = `0x__`  

`0b10101000` = `__`  
`0b01010100` = `__`  

### Option 2: PicoCTF Hex Endianness Challenge
Everyone choosing option 2 should get together on one side of the room. you'll need to do a little bit more learning (on *endianness* and *ASCII encoding*)

#### Endianness
Read about endianness here: https://faculty.cs.niu.edu/~hutchins/csci480/endianness.htm  
You'll need to know this stuff for the challenge this week, so write down any notes on endianness below:

###### helpful examples
(Big-Endian) `0x 12 34` ==> `0x 34 12`(Little-Endian)  
(BE) `0x001122` ==> `0x221100` (LE)  
(BE) `0xDEADBEEF` ==> `0xEFBEADDE` (LE)  

#### Encodings
The ASCII (pronounced "ask-ee") encoding maps characters to particular byte values. For example, 'a' in ASCII is `0x61`. 'b' in ASCII is `0x62`.  
The challenge will give you a string of characters that it wants you to encode into hex using ASCII. You can find the hex encoding of a character at [asciitable.com](https://www.asciitable.com). See if you can find the hex for the 'a' and 'b' characters from before.