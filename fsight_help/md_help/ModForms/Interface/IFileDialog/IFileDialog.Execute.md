# IFileDialog.Execute

IFileDialog.Execute
-


# IFileDialog.Execute


## Синтаксис


Execute: Boolean;


## Описание


Метод Execute осуществляет инициализацию
 диалога и возвращает результат выбора пользователя.


## Комментарии


Метод возвращает значение True,
 если была нажата кнопка Открыть/Сохранить, иначе - False.
 Если была нажата кнопка Открыть/Сохранить, то путь и наименование выбранного
 файла будут доступны в свойстве [FileName](IFileDialog.FileName.htm)
 и коллекции [FileNames](IFileDialog.FileNames.htm). Если для
 компонента [FileOpenDialog](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/FileOpenDialog.htm)
 включён режим [множественного
 выбора файлов](../IFileOpenDialog/IFileOpenDialog.MultiSelect.htm), то в свойстве [FileNames](IFileDialog.FileNames.htm)
 будет содержаться информация обо всех выбранных файлах, а в свойстве [FileName](IFileDialog.FileName.htm) информация только о первом
 файле. Файлы в коллекции [FileNames](IFileDialog.FileNames.htm)
 будут расположены в том порядке, в каком они отсортированы в диалоге.


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней двух кнопок с наименованиями B_OPEN и B_SAVE и компонентов FileOpenDialog
 и FileSaveDialog с наименованиями FileOpenDialog1 и FileSaveDialog1 соответственно.


	Class TESTForm: Form

	    Button1: Button;

	    Button2: Button;

	    FileOpenDialog1: FileOpenDialog;

	    FileSaveDialog1: FileSaveDialog;


	    Sub B_OPENOnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        FileName: String;

	    Begin

	        FileOpenDialog1.MultiSelect := True;

	        If FileOpenDialog1.Execute Then

	            For Each FileName In FileOpenDialog1.FileNames Do

	                Debug.WriteLine(FileName);

	            End For;

	        End If;

	    End Sub B_OPENOnClick;


	    Sub B_SAVEOnClick(Sender: Object; Args: IMouseEventArgs);

	    Begin

	        If FileSaveDialog1.Execute Then

	            Debug.WriteLine(FileSaveDialog1.FileName);

	        End If;

	    End Sub B_SAVEOnClick;

	End Class TESTForm;


При нажатии на кнопку B_OPEN будет инициализирован диалог открытия файлов,
 при нажатии кнопки B_SAVE - диалог сохранения в файл. При выборе файлов
 и нажатии в диалогах кнопок «Открыть/Сохранить» информация о файлах будет
 выведена в консоль среды разработки.


См. также:


[IFileDialog](IFileDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
