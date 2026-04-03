import XCTest
import SwiftTreeSitter
import TreeSitterMaude

final class TreeSitterMaudeTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_maude())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Maude grammar")
    }
}
