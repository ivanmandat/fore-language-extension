# IWinApplicationHelp.DisplayIndex

IWinApplicationHelp.DisplayIndex
-


# IWinApplicationHelp.DisplayIndex


## Синтаксис


DisplayIndex([HelpFile: String = ""]);


## Параметры


HelpFile. Необязательный параметр,
 определяющий наименование файла справки, который необходимо открыть. Если
 параметр не установлен, осуществляется открытие файла, указанного в свойстве
 [FileName](IWinApplicationHelp.FileName.htm).


Примечание.
 При указании имени файла справки без пути, поиск файла будет произведен
 в папке из которой [запущен](../IWinApplicationClass/IWinApplicationClass.Binary.htm)
 текущий экземпляр платформы.


## Описание


Метод DisplayIndex открывает
 файл справки на вкладке «Указатель».


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

    Help.DisplayIndex;

End Sub Button1OnClick;


При нажатии на кнопку указанный файл справки будет открыт на вкладке
 «Указатель».


См. также:


[IWinApplicationHelp](IWinApplicationHelp.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
