# IFileOpenDialog.MultiSelect

IFileOpenDialog.MultiSelect
-


# IFileOpenDialog.MultiSelect


## Синтаксис


MultiSelect: Boolean;


## Описание


Свойство MultiSelect определяет
 возможность множественного выбора файлов в окне.


## Комментарии


Если свойству MultiSelect установить
 значение True, то при использовании
 клавиш SHIFT или CTRL можно отметить несколько файлов окна.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента FileOpenDialog
 с наименованием «FileOpenDialog1».


			Sub Button1OnClick(Sender: Object; Args: IEventArgs);

Var

    FileStr: IFileStream;

Begin

    FileOpenDialog1.MultiSelect := False;

    FileOpenDialog1.ShowReadOnly := True;

    FileOpenDialog1.ReadOnlyChecked := True;

    If FileOpenDialog1.Execute Then

        If FileOpenDialog1.ReadOnlyChecked Then

            FileStr := File.Open(FileOpenDialog1.FileName, FileOpenMode.Read, FileShare.DenyNone);

            //...

        Else

            FileStr := File.Open(FileOpenDialog1.FileName, FileOpenMode.ReadWrite, FileShare.Exclusive);

            //...

        End If;

        Dispose FileStr;

    End If;

End Sub Button1OnClick;


При нажатии на кнопку будет инициализирован диалог открытия файла. При
 инициализации диалога в нём будет присутствовать флажок «Только чтение».
 Флажок будет отмечен. Будет доступен выбор только одного файла. При выборе
 файла и нажатия кнопки «OK», в зависимости от состояния флажка «Только
 чтение», данный файл будет открыт только на чтение, либо с возможностью
 записи и запретом доступа к данному файлу из других приложений.


См. также:


[IFileOpenDialog](IFileOpenDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
