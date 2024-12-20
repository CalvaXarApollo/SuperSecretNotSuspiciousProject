using SuperSecretNotSuspiciousProject.Core.Models;

namespace SuperSecretNotSuspiciousProject.Core.DataAccess;

public class PuzzleDal : IPuzzleDal
{
    public async Task<IEnumerable<Puzzle>> GetPuzzles()
    {
        return new List<Puzzle>
        {
            new()
            {
                PuzzleSequenceId = 0,
                Heading = "Discern Thy Locale",
                Question = "Not only hast thou been hurled into times of yore, but thine whereabouts seem strange as well. Unearth the proper marks to unveil thy locale. This must be the true name, and not but mere coordinates.\n\n\nUpon the compass, crowned in black,\n\nFind me waiting, no turning back.\n\nThe guiding star will point to who?\n\nForever constant, bold, and true.",
                Answer = "Dixon",
                SecretLetter = 'S',
                ImageUrl = "puzzle-element.png"
            },
            new()
            {
                PuzzleSequenceId = 1,
                Heading = "Findeth the True Hour",
                Question = "The rift doth cause time to act most queerly here. The clock doth flicker 'twixt many hours. Enter the word hidden behind the true hour and bringeth steadiness to the rift.",
                Answer = "Fief",
                SecretLetter = 'X',
                ImageUrl = "puzzle-element2.png"
            },
            new()
            {
                PuzzleSequenceId = 2,
                Heading = "Haste, Cease the Melody",
                Question = "Alas, repairing the clocks hath awakened the Christmas melody. Hasten, find the code and still the music ere it reveal thy whereabouts to the townsfolk.",
                Answer = "Stilleth",
                SecretLetter = 'B',
                ImageUrl = "PuzzleImagePhone.svg"
            },
            new()
            {
                PuzzleSequenceId = 3,
                Heading = "Quell the Time-Disrupting Relics",
                Question = "The rift doth begin to settle, yet there be objects here that cause disturbance. Arrange their digits aright to still their shifting:\n\nHairy Cam’s, Bloat Pole, Huge Web Go, Squilerr",
                Answer = "3701",
                SecretLetter = 'I',
                ImageUrl = "puzzle-element3.png"
            },
            new()
            {
                PuzzleSequenceId = 4,
                Heading = "Find the Phrase that Breaketh the Loop",
                Question = "Time loops driveth all to madness, yet now the words themselves do loop as well. Red, black, and blue be the words of importance to thee, fill in the blanks below to reveal the whereabouts you need.\n\n- - - - - - - - -!/- - - - - -/- - - - - -./- - - - - - - -/- - - - - -/- - - - - -.",
                Answer = "Alcatraz",
                SecretLetter = 'S',
                ImageUrl = "puzzle-element4.png"
            },
            new()
            {
                PuzzleSequenceId = 5,
                Heading = "Enter the Final Command",
                Question = "To seal the rift, thou must utter the final command. But hark, all is not as it seemeth, for letters have been jumbled and A is truly H. But what, dear friend, should the other letters be?",
                Answer = "Pizzle",
                SecretLetter = 'E',
                ImageUrl = "puzzle-element5.png"
            },
            new()
            {
                PuzzleSequenceId = 6,
                Heading = "Save the Ales",
                Question = "Thou thoughtst thy task complete, yet something still seemeth amiss. The ales are locked away, and we need them this very night! Unravel the code to free the ales, and once within, thou shalt find the answer thou seekest.\n\nThe Secret Letter is X.",
                Answer = "Quaffing",
                SecretLetter = 'X',
                ImageUrl = "beer.png"
            }
        };
    }
}