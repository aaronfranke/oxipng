(function() {var implementors = {};
implementors['variance'] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='variance/struct.Invariant.html' title='variance::Invariant'>Invariant</a>&lt;T&gt;","impl&lt;'id&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='variance/struct.InvariantLifetime.html' title='variance::InvariantLifetime'>InvariantLifetime</a>&lt;'id&gt;",];implementors['vec_map'] = ["impl&lt;V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='vec_map/struct.VecMap.html' title='vec_map::VecMap'>VecMap</a>&lt;V&gt;","impl&lt;'a, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='vec_map/struct.Iter.html' title='vec_map::Iter'>Iter</a>&lt;'a, V&gt;","impl&lt;'a, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='vec_map/struct.Keys.html' title='vec_map::Keys'>Keys</a>&lt;'a, V&gt;","impl&lt;'a, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='vec_map/struct.Values.html' title='vec_map::Values'>Values</a>&lt;'a, V&gt;",];implementors['bit_vec'] = ["impl&lt;B: <a class='trait' href='bit_vec/trait.BitBlock.html' title='bit_vec::BitBlock'>BitBlock</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='bit_vec/struct.BitVec.html' title='bit_vec::BitVec'>BitVec</a>&lt;B&gt;","impl&lt;'a, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + 'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='bit_vec/struct.Iter.html' title='bit_vec::Iter'>Iter</a>&lt;'a, B&gt;","impl&lt;'a, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + 'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='bit_vec/struct.Blocks.html' title='bit_vec::Blocks'>Blocks</a>&lt;'a, B&gt;",];implementors['utf8_ranges'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='utf8_ranges/enum.Utf8Sequence.html' title='utf8_ranges::Utf8Sequence'>Utf8Sequence</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='utf8_ranges/struct.Utf8Range.html' title='utf8_ranges::Utf8Range'>Utf8Range</a>",];implementors['ansi_term'] = ["impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='ansi_term/struct.ANSIString.html' title='ansi_term::ANSIString'>ANSIString</a>&lt;'a&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='ansi_term/enum.Colour.html' title='ansi_term::Colour'>Colour</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='ansi_term/struct.Style.html' title='ansi_term::Style'>Style</a>",];implementors['crossbeam'] = ["impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='crossbeam/mem/epoch/struct.Shared.html' title='crossbeam::mem::epoch::Shared'>Shared</a>&lt;'a, T&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='crossbeam/sync/chase_lev/struct.Stealer.html' title='crossbeam::sync::chase_lev::Stealer'>Stealer</a>&lt;T&gt;",];implementors['scoped_pool'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='scoped_pool/struct.Pool.html' title='scoped_pool::Pool'>Pool</a>",];implementors['libc'] = ["impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.pthread_attr_t.html' title='libc::pthread_attr_t'>pthread_attr_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.glob_t.html' title='libc::glob_t'>glob_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sockaddr_storage.html' title='libc::sockaddr_storage'>sockaddr_storage</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.addrinfo.html' title='libc::addrinfo'>addrinfo</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.mach_timebase_info.html' title='libc::mach_timebase_info'>mach_timebase_info</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.stat.html' title='libc::stat'>stat</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.dirent.html' title='libc::dirent'>dirent</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.pthread_mutex_t.html' title='libc::pthread_mutex_t'>pthread_mutex_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.pthread_mutexattr_t.html' title='libc::pthread_mutexattr_t'>pthread_mutexattr_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.pthread_cond_t.html' title='libc::pthread_cond_t'>pthread_cond_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.pthread_rwlock_t.html' title='libc::pthread_rwlock_t'>pthread_rwlock_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.siginfo_t.html' title='libc::siginfo_t'>siginfo_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sigaction.html' title='libc::sigaction'>sigaction</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.stack_t.html' title='libc::stack_t'>stack_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.fstore_t.html' title='libc::fstore_t'>fstore_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.radvisory.html' title='libc::radvisory'>radvisory</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.statvfs.html' title='libc::statvfs'>statvfs</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.Dl_info.html' title='libc::Dl_info'>Dl_info</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sockaddr_in.html' title='libc::sockaddr_in'>sockaddr_in</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.statfs.html' title='libc::statfs'>statfs</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.kevent.html' title='libc::kevent'>kevent</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.kevent64_s.html' title='libc::kevent64_s'>kevent64_s</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.dqblk.html' title='libc::dqblk'>dqblk</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.termios.html' title='libc::termios'>termios</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.flock.html' title='libc::flock'>flock</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sf_hdtr.html' title='libc::sf_hdtr'>sf_hdtr</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sockaddr.html' title='libc::sockaddr'>sockaddr</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sockaddr_in6.html' title='libc::sockaddr_in6'>sockaddr_in6</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.sockaddr_un.html' title='libc::sockaddr_un'>sockaddr_un</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.passwd.html' title='libc::passwd'>passwd</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.ifaddrs.html' title='libc::ifaddrs'>ifaddrs</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.fd_set.html' title='libc::fd_set'>fd_set</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.tm.html' title='libc::tm'>tm</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.utsname.html' title='libc::utsname'>utsname</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.msghdr.html' title='libc::msghdr'>msghdr</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.fsid_t.html' title='libc::fsid_t'>fsid_t</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.utimbuf.html' title='libc::utimbuf'>utimbuf</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.timeval.html' title='libc::timeval'>timeval</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.timespec.html' title='libc::timespec'>timespec</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.rlimit.html' title='libc::rlimit'>rlimit</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.rusage.html' title='libc::rusage'>rusage</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.in_addr.html' title='libc::in_addr'>in_addr</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.in6_addr.html' title='libc::in6_addr'>in6_addr</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.ip_mreq.html' title='libc::ip_mreq'>ip_mreq</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.ipv6_mreq.html' title='libc::ipv6_mreq'>ipv6_mreq</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.hostent.html' title='libc::hostent'>hostent</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.iovec.html' title='libc::iovec'>iovec</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.pollfd.html' title='libc::pollfd'>pollfd</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.winsize.html' title='libc::winsize'>winsize</a>",];implementors['regex_syntax'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex_syntax/struct.Literals.html' title='regex_syntax::Literals'>Literals</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex_syntax/struct.Lit.html' title='regex_syntax::Lit'>Lit</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='regex_syntax/enum.Expr.html' title='regex_syntax::Expr'>Expr</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='regex_syntax/enum.Repeater.html' title='regex_syntax::Repeater'>Repeater</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex_syntax/struct.CharClass.html' title='regex_syntax::CharClass'>CharClass</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex_syntax/struct.ClassRange.html' title='regex_syntax::ClassRange'>ClassRange</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex_syntax/struct.ByteClass.html' title='regex_syntax::ByteClass'>ByteClass</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex_syntax/struct.ByteRange.html' title='regex_syntax::ByteRange'>ByteRange</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex_syntax/struct.ExprBuilder.html' title='regex_syntax::ExprBuilder'>ExprBuilder</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex_syntax/struct.Error.html' title='regex_syntax::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='regex_syntax/enum.ErrorKind.html' title='regex_syntax::ErrorKind'>ErrorKind</a>",];implementors['aho_corasick'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='aho_corasick/struct.Match.html' title='aho_corasick::Match'>Match</a>","impl&lt;P: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='aho_corasick/struct.FullAcAutomaton.html' title='aho_corasick::FullAcAutomaton'>FullAcAutomaton</a>&lt;P&gt;","impl&lt;P: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='aho_corasick/struct.AcAutomaton.html' title='aho_corasick::AcAutomaton'>AcAutomaton</a>&lt;P, T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='aho_corasick/struct.Dense.html' title='aho_corasick::Dense'>Dense</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='aho_corasick/struct.Sparse.html' title='aho_corasick::Sparse'>Sparse</a>",];implementors['regex'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for Exec","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for InputAt","impl&lt;'t&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for CharInput&lt;'t&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for Char","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for LiteralSearcher","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for Program","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for Inst","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for EmptyLook","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for InstRanges","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex/bytes/struct.Regex.html' title='regex::bytes::Regex'>Regex</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex/struct.Regex.html' title='regex::Regex'>Regex</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex/struct.RegexSet.html' title='regex::RegexSet'>RegexSet</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex/struct.SetMatches.html' title='regex::SetMatches'>SetMatches</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex/struct.SetMatchesIter.html' title='regex::SetMatchesIter'>SetMatchesIter</a>&lt;'a&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex/bytes/struct.RegexSet.html' title='regex::bytes::RegexSet'>RegexSetBytes</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex/bytes/struct.SetMatches.html' title='regex::bytes::SetMatches'>SetMatchesBytes</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='regex/bytes/struct.SetMatchesIterBytes.html' title='regex::bytes::SetMatchesIterBytes'>SetMatchesIterBytes</a>&lt;'a&gt;",];implementors['clap'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='clap/enum.AppSettings.html' title='clap::AppSettings'>AppSettings</a>","impl&lt;'a, 'b&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='clap/struct.App.html' title='clap::App'>App</a>&lt;'a, 'b&gt;","impl&lt;'a, 'b&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='clap/struct.Arg.html' title='clap::Arg'>Arg</a>&lt;'a, 'b&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='clap/struct.ArgMatches.html' title='clap::ArgMatches'>ArgMatches</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='clap/struct.SubCommand.html' title='clap::SubCommand'>SubCommand</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='clap/struct.ArgGroup.html' title='clap::ArgGroup'>ArgGroup</a>&lt;'a&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='clap/enum.ErrorKind.html' title='clap::ErrorKind'>ErrorKind</a>",];implementors['oxipng'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='oxipng/png/enum.ColorType.html' title='oxipng::png::ColorType'>ColorType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='oxipng/png/enum.BitDepth.html' title='oxipng::png::BitDepth'>BitDepth</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='oxipng/png/enum.Headers.html' title='oxipng::png::Headers'>Headers</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='oxipng/png/struct.ScanLines.html' title='oxipng::png::ScanLines'>ScanLines</a>&lt;'a&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='oxipng/png/struct.ScanLine.html' title='oxipng::png::ScanLine'>ScanLine</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='oxipng/png/struct.PngData.html' title='oxipng::png::PngData'>PngData</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='oxipng/png/struct.IhdrData.html' title='oxipng::png::IhdrData'>IhdrData</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='oxipng/struct.Options.html' title='oxipng::Options'>Options</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
