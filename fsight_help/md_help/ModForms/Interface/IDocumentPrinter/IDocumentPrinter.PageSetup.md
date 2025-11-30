# IDocumentPrinter.PageSetup

IDocumentPrinter.PageSetup
-


# IDocumentPrinter.PageSetup


## Синтаксис


PageSetup(SectionIndex: Integer; [ParentWindow:
 [IWin32Window](../IWin32Window/IWin32Window.htm) = Null]);


## Параметры


SectionIndex. Параметр, определяющий
 индекс секции, параметры которой необходимо изменить.


ParentWindow. Окно, для которого
 данное окно откроется модально. По умолчанию ParentWindow - текущая форма.


## Описание


Метод PageSetup осуществляет
 вызов окна "Параметры страницы" для указанной секции документа.


## Комментарии


Содержимое диалога определяется объектом, подключенным в качестве [источника](IDocumentPrinter.Source.htm) для текущего компонента
 DocumentPrinter.


См. также:


[IDocumentPrinter](IDocumentPrinter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
