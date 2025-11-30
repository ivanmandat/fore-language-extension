# IWinApplicationHelp.FileName

IWinApplicationHelp.FileName
-


# IWinApplicationHelp.FileName


## Синтаксис


FileName: String;


## Описание


Свойство FileName определяет
 путь и наименование файла справки.


Примечание.
 При указании имени файла справки без пути, поиск файла будет произведен
 в папке из которой [запущен](../IWinApplicationClass/IWinApplicationClass.Binary.htm)
 текущий экземпляр платформы.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки, а также наличие файла справки «C:\Help\Project.chm». Пример
 является обработчиком события OnClick для компонента «Button1».


Добавьте ссылку на [системную сборку UI](../Ui_Intefrace.htm).


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Help: IWinApplicationHelp;

Begin

    Help := WinApplication.Help;

    Help.FileName := "C:\Help\Project.chm";

    Help.DisplayContents;

End Sub Button1OnClick;


При нажатии на кнопку указанный файл справки будет открыт на вкладке
 «Содержание».


См. также:


[IWinApplicationHelp](IWinApplicationHelp.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
