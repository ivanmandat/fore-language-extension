# IWinApplicationHelp.KeywordLookup

IWinApplicationHelp.KeywordLookup
-


# IWinApplicationHelp.KeywordLookup


## Синтаксис


KeywordLookup(Keyword: String; [HelpFile: String
 = ""]);


## Параметры


Keyword - ключевое слово, по
 которым составляется указатель справки.


HelpFile - необязательный параметр,
 определяющий наименование файла справки, в котором будет осуществляться
 поиск ключевого слова. Если параметр не установлен, поиск осуществляется
 в файле, указанном в свойстве [FileName](IWinApplicationHelp.FileName.htm).


Примечание.
 При указании имени файла справки без пути, поиск файла будет произведен
 в папке из которой [запущен](../IWinApplicationClass/IWinApplicationClass.Binary.htm)
 текущий экземпляр платформы.


Метод KeywordLookup осуществляет
 поиск ключевого слова Keyword
 в файле справки и открывает справку с позиционированием на странице, которая
 сопоставлена ключевому слову.


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

    Help.KeywordLookup("Directory", "C:\Help\Project.chm");

End Sub Button1OnClick;


При выполнении примера после нажатия кнопки будет осуществлен поиск
 по ключевым словам, которые добавлены в указатель и сопоставлены со страницей
 справки.


См. также:


[IWinApplicationHelp](IWinApplicationHelp.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
