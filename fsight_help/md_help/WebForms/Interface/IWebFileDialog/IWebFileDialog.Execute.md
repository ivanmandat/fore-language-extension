# IWebFileDialog.Execute

IWebFileDialog.Execute
-


# IWebFileDialog.Execute


## Синтаксис


Execute: Boolean;


## Описание


Метод Execute осуществляет инициализацию
 диалога и возвращает результат выбора пользователя.


## Комментарии


Метод возвращает значение True,
 если в диалоге была нажата кнопка Открыть/Сохранить, иначе - False.


При работе с диалогом [FileOpenDialog](UiDevEnv.chm::/Web_components/FileOpenDialog.htm),
 если была нажата кнопка Открыть, то путь и наименование выбранного файла
 будут доступны в свойстве [FileName](IWebFileDialog.FileName.htm).
 Содержимое файла будет доступно в потоке [FileData](IWebFileDialog.FileData.htm).


Если осуществляется инициализация диалога [FileSaveDialog](UiDevEnv.chm::/Web_components/FileSaveDialog.htm),
 то перед вызовом метода Execute необходимо определить свойство [FileData](IWebFileDialog.FileData.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие папки с
 идентификатором F_DOCUMENT и документа с идентификатором D_IMAGE. Также
 предполагается наличие веб-формы, на которой расположены две кнопки, компонент
 FileOpenDialog и FileSaveDialog. Для кнопок созданы обработчики события
 OnClick. Код веб-формы представлен ниже.


Добавьте ссылки на системную сборку IO.


	Class TESTWebForm: WebForm

	    FileOpenDialog1: WebFileOpenDialog;

	    FileSaveDialog1: WebFileSaveDialog;

	    OpenBtn: WebButton;

	    SaveBtn: WebButton;


	    Sub OpenBtnOnClick;

	    Var

	        Mb: IMetabase;

	        CrInfo: IMetabaseObjectCreateInfo;

	        MObj: IMetabaseObject;

	        Doc: IDocument;

	    Begin

	        FileOpenDialog1.Filter := ".txt";

	        If FileOpenDialog1.Execute Then

	            Mb := MetabaseClass.Active;

	            CrInfo := Mb.CreateCreateInfo;

	            CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_DOCUMENT;

	            CrInfo.Id := Mb.GenerateId("DOC_TXT");

	            CrInfo.Name := Path.GetFileName(FileOpenDialog1.FileName);

	            CrInfo.Parent := MB.ItemById("F_DOCUMENT");

	            // Создание нового документа в репозитории и загрузка в него выбранного файла

	            MObj := MB.CreateObject(CrInfo).Edit;

	            Doc := MObj As IDocument;

	            Doc.LoadFromStream(FileOpenDialog1.FileData);

	            Doc.FileName := CrInfo.Name;

	            MObj.Save;

	        End If;

	    End Sub OpenBtnOnClick;


	    Sub SaveBtnOnClick;

	    Var

	        Mb: IMetabase;

	        Doc: IDocument;

	    Begin

	        Mb := MetabaseClass.Active;

	        Doc := Mb.ItemById("D_IMAGE").Bind As IDocument;

	        // Настройка и инициализация диалога сохранения

	        FileSaveDialog1.FileData := Doc.GetAsStream;

	        FileSaveDialog1.FileName := Doc.FileName;

	        If FileSaveDialog1.Execute Then

	            Self.Text := "Документ сохранён в файловой системе.";

	        End If;

	    End Sub SaveBtnOnClick;

	End Class TESTWebForm;


При нажатии на кнопку OpenBtn будет инициализирован диалог открытия
 файлов. В диалоге для выбора будут доступны только текстовые файлы. Если
 выбрать файл и нажать кнопку Открыть. то в репозитории на базе выбранного
 файла будет создан новый документ.


При нажатии на кнопку SaveBtn инициализируется диалог сохранения файла.
 В качестве сохраняемого файла выступает файл, который содержится в документе
 D_IMAGE. После нажатия кнопки Сохранить файл сохраняется в файловой системе
 средствами браузера.


См. также:


[IWebFileDialog](IWebFileDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
