function capME(names) {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()); 
}

// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.
//capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
//capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

