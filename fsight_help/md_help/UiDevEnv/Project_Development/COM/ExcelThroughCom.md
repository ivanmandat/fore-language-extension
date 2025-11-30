# Работа с Microsoft Excel

Работа с Microsoft Excel
-


# Работа с Microsoft Excel


## Инициализация нового COM-объекта Microsoft Excel


Для создания COM-объекта Microsoft Excel укажите программный идентификатор
 Excel.Application с помощью метода
 [Variant.CreateObject](foresys.chm::/class/variant/variant.createobject.htm):


	Var

	    Excel: Variant;

	Begin

	    Excel := Variant.CreateObject("Excel.Application");


Экземпляр COM-объекта будет создан в памяти компьютера. Для полноценной
 работы с приложением Excel необходимо в нем создать новую книгу, либо
 открыть уже существующую, и установить для свойства Application.Visible
 (См. справку по Visual Basic) значение True:


	Var

	    Excel: Variant;

	Begin

	    Excel := Variant.CreateObject("Excel.Application");

	    // Создание новой книги

	    Excel.GetProperty("Workbooks").Invoke("Add", New Variant[0]);

	    // либо, открытие существующей книги

	    Excel.GetProperty("Workbooks").Invoke("Open", "c:\Book1.xlsx");

	    // Отображение приложения

	    Excel.SetProperty("Visible", True);


После этого окно приложения будет отображено на экране.


## Вывод окна приложения на передний план в Windows 7


В операционной системе Windows 7 разработчиками Microsoft был изменён
 подход к работе с окнами, поэтому код, указанный выше, приведёт к созданию
 приложения Excel, но приложение не получит фокус. Окно приложения будет
 расположено на заднем плане, а его ярлык будет доступен только на панели
 задач. Для перевода окна на передний план и передачи ему фокуса минимизируйте
 размеры окна перед его отображением, а затем восстановите их. В Fore для
 этого можно использовать следующий код:


	Enum XlWindowState

	    xlMaximized = -4137, xlMinimized = -4140, xlNormal = -4143

	End Enum XlWindowState;


	Var

	    Excel: Variant;

	Begin

	    Excel := Variant.CreateObject("Excel.Application");

	    Excel.GetProperty("Workbooks").Invoke("Add", New Variant[0]);

	    Excel.SetProperty("WindowState", XlWindowState.xlMinimized);

	    Excel.SetProperty("WindowState", XlWindowState.xlMaximized);

	    Excel.SetProperty("Visible", True);


См. также:


[Работа
 с COM-объектами](Working_with_COM_objects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
