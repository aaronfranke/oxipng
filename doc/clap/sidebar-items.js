initSidebarItems({"enum":[["AppSettings","Application level settings, which affect how `App` operates"],["ErrorKind","Command line argument parser kind of error"],["Format","Defines styles for different types of error messages. Defaults to Error=Red, Warning=Yellow, and Good=Green"]],"macro":[["_clap_count_exprs!","Counts the number of comma-delimited expressions passed to it.  The result is a compile-time evaluable expression, suitable for use as a static array size, or the value of a `const`."],["arg_enum!","Convenience macro to generate more complete enums with variants to be used as a type when parsing arguments. This enum also provides a `variants()` function which can be used to retrieve a `Vec<&'static str>` of the variant names, as well as implementing `FromStr` and `Display` automatically."],["crate_version!","Allows you pull the version for an from your Cargo.toml at compile time as MAJOR.MINOR.PATCH_PKGVERSION_PRE"],["value_t!","Convenience macro getting a typed value `T` where `T` implements `std::str::FromStr` from an argument value. This macro returns a `Result<T,String>` which allows you as the developer to decide what you'd like to do on a failed parse. There are two types of errors, parse failures and those where the argument wasn't present (such as a non-required argument). You can use it to get a single value, or a iterator as with the `ArgMatches::values_of`"],["value_t_or_exit!","Convenience macro getting a typed value `T` where `T` implements `std::str::FromStr` or exiting upon error instead of returning a `Result`"],["values_t!","Convenience macro getting a typed value `Vec<T>` where `T` implements `std::str::FromStr` This macro returns a `clap::Result<Vec<T>>` (`Result<Vec<T>, clap::Error>`) which allows you as the developer to decide what you'd like to do on a failed parse."],["values_t_or_exit!","Convenience macro getting a typed value `Vec<T>` where `T` implements `std::str::FromStr` or exiting upon error."]],"struct":[["App","Used to create a representation of a command line program and all possible command line arguments. Application settings are set using the \"builder pattern\" with the `.get_matches()` family of methods being the terminal methods that starts the runtime-parsing process. These methods then return information about the user supplied arguments (or lack there of)."],["Arg","The abstract representation of a command line argument. Used to set all the options and relationships that define a valid argument for the program."],["ArgGroup","`ArgGroup`s are a family of related arguments and way for you to express, \"Any of these arguments\". By placing arguments in a logical group, you can create easier requirement and exclusion rules instead of having to list each argument individually, or when you want a rule to apply \"any but not all\" arguments."],["ArgMatches","Used to get information about the arguments that where supplied to the program at runtime by the user. New instances of this struct are obtained by using the `App::get_matches` family of methods."],["Error","Command Line Argument Parser Error"],["SubCommand","The abstract representation of a command line subcommand."]],"type":[["Result","Short hand for result type"]]});