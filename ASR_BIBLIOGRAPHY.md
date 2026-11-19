# Βιβλιογραφία και επιλογή ASR

## Τι χρησιμοποιεί η εφαρμογή

Η εφαρμογή χρησιμοποιεί ASR μόνο ως υποστηρικτική μεταγραφή της απάντησης του παιδιού. Η βαθμολόγηση δεν βασίζεται σε μοντέλο AI, αλλά στους κανόνες πληροφοριακής και γραμματικής επάρκειας που έχουν περαστεί από τους πίνακες του Action Picture Test.

Η ασφαλής κλινική ρύθμιση είναι `hybrid` ή `server`. Η εφαρμογή είναι πλέον
ρυθμισμένη σε `hybrid`:

- `browser`: γρήγορη μεταγραφή από τον browser, χρήσιμη για δοκιμή και άμεση καταγραφή.
- `server`: αποστολή ηχητικού σε backend ASR, ώστε να μη μπαίνει API key στο δημόσιο site.
- `hybrid`: live browser μεταγραφή και μετά τελικό transcript από backend ASR.

Για πραγματική χρήση προτείνεται backend ASR με:

- ελληνική γλώσσα (`el-GR`)
- αποθήκευση/αναπαραγωγή ηχητικού για έλεγχο θεραπευτή
- confidence ή εναλλακτικές μεταγραφές όταν υπάρχουν
- δυνατότητα χειροκίνητης διόρθωσης πριν οριστικοποιηθεί η αξιολόγηση

Η προτεινόμενη πρακτική υλοποίηση είναι hosted `gpt-4o-transcribe` για ποιότητα
και ευκολία παραγωγής. Αν χρειάζεται αυστηρότερη ερευνητική αντιστοίχιση με
παιδιατρικές μελέτες, προτείνεται self-hosted `WhisperX-medium` ή
`WhisperX-large`, επειδή έχουν αξιολογηθεί σε πρόσφατη μελέτη παιδιών με
δυσαρθρία. Για hosted Whisper-compatible OpenAI API μπορεί να χρησιμοποιηθεί
`whisper-1`, γνωρίζοντας ότι δεν είναι το ίδιο με self-hosted WhisperX-large.

Το ASR δεν αντικαθιστά τον/την λογοθεραπευτή/τρια. Χρησιμοποιείται για να μειώνει τον χρόνο μεταγραφής και να κάνει πιο άμεση τη ροή του παιχνιδιού.

## Γιατί αυτή η επιλογή

Η βιβλιογραφία στη λογοθεραπεία δείχνει ότι το ASR είναι χρήσιμο εργαλείο έρευνας και υποστήριξης, αλλά χρειάζεται προσοχή σε παιδιά, άτυπη ομιλία, θόρυβο και κλινικούς πληθυσμούς. Για αυτό η εφαρμογή κρατά το ASR ως μεταγραφή με επαλήθευση, ενώ οι βαθμοί βγαίνουν από τους κλειστούς πίνακες.

## Βιβλιογραφία

1. Keshet, J. (2018). Automatic speech recognition: A primer for speech-language pathology researchers. International Journal of Speech-Language Pathology, 20(6), 599-609. https://pubmed.ncbi.nlm.nih.gov/31274357/

2. McKechnie, J., Ahmed, B., Gutierrez-Osuna, R., Monroe, P., McCabe, P., & Ballard, K. J. (2018). Automated speech analysis tools for children's speech production: A systematic literature review. International Journal of Speech-Language Pathology, 20(6), 583-598. https://pubmed.ncbi.nlm.nih.gov/29996691/

3. Kim, D. H., Jeong, J. W., Kang, D., Ahn, T., Hong, Y., Im, Y., Kim, J., Kim, M. J., & Jang, D. H. (2025). Usefulness of Automatic Speech Recognition Assessment of Children With Speech Sound Disorders: Validation Study. Journal of Medical Internet Research, 27, e60520. https://www.jmir.org/2025/1/e60520

4. Gutz, S. E., Stipancic, K. L., Yunusova, Y., Berry, J. D., & Green, J. R. (2022). Validity of Off-the-Shelf Automatic Speech Recognition for Assessing Speech Intelligibility and Speech Severity in Speakers With Amyotrophic Lateral Sclerosis. Journal of Speech, Language, and Hearing Research, 65(6), 2128-2143. https://pubs.asha.org/doi/10.1044/2022_JSLHR-21-00589

5. Radford, A., Kim, J. W., Xu, T., Brockman, G., McLeavey, C., & Sutskever, I. (2023). Robust Speech Recognition via Large-Scale Weak Supervision. Proceedings of Machine Learning Research, 202, 28492-28518. https://proceedings.mlr.press/v202/radford23a.html

6. Automatic Speech Recognition for Intelligibility Assessment in Children With Dysarthria. Journal of Speech, Language, and Hearing Research. https://pubmed.ncbi.nlm.nih.gov/41746192/

7. OpenAI API documentation for transcription models, including `gpt-4o-transcribe` and `whisper-1`. https://developers.openai.com/api/docs/guides/speech-to-text
