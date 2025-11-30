# Variant.Invoke

Variant.Invoke
-


# Variant.Invoke


## Синтаксис


Invoke(Name: String; Parameters: Array): Variant;


## Параметры


Name. Название метода, который
 необходимо выполнить для текущего объекта;


Parameters. Массив значений
 параметров, необходимых для выполнения указанного метода. Если выполняемый
 метод не имеет параметров, то данный параметр можно не указывать.


## Описание


Метод Invoke позволяет выполнить
 метод для объекта, содержащегося в переменной.


## Комментарии


Наименование и параметры метода зависят от объекта, для которого они
 применяются.


Значения параметров, используемые для выполнения метода, могут быть
 указаны в виде отдельного массива
 или перечислены через запятую.
 Размер массива должен соответствовать количеству передаваемых параметров.


Для выполнения методов, имеющих в своей сигнатуре параметры,
 передаваемые по ссылке, необходимо использовать вариант с отдельным
 массивом. Значения, полученные в результате выполнения метода, будут помещены
 в соответствующие элементы массива. Перед выполнением элементы массива,
 в которые будут помещены значения, должны быть проинициализированы в соответствии
 с тем типом данных, который имеют параметры метода.


Важно. В метод Invoke
 значения параметров должны передаваться
 в обратном порядке относительно порядка параметров в сигнатуре выполняемого
 метода.

Значения необязательных параметры можно не указывать. Если требуется указать
 значение определенного необязательного параметра, то также необходимо
 указать значения всех предшествующих обязательных и необязательных параметров.


Пример: Выполняемый метод имеет
 следующую сигнатуру MySub(A,B,C:
 Variant). Вызов метода Invoke
 должен иметь следующий вид:


	Var

	    //список переменных

	    v: Variant;

	Begin

	    v := //Инициализация объекта

	    ...

	    v.Invoke("MySub", C, B, A);


либо:


	Var

	    //список переменных

	    v: Variant;

	    Arr: Array Of Variant;

	Begin

	    v := //Инициализация объекта

	    ...

	    Arr := New Variant[3];

	    Arr[0] := C;

	    Arr[1] := B;

	    Arr[2] := A;

	    v.Invoke("MySub", Arr);


Где: v - объект, для которого выполняется метод. A,B,C - значения параметров
 метода, Arr - массив, в который помещены значения параметров метода.


Пример: Выполняемый метод имеет
 следующую сигнатуру MySub(A,B:
 Double; Var C: Double). Вызов
 метода Invoke должен иметь следующий
 вид:


	Var

	    //список переменных

	    v: Variant;

	    Arr: Array Of Variant;

	Begin

	    v := //Инициализация объекта

	    ...

	    Arr := New Variant[3];

	    Arr[0] := Double.MinValue;

	    Arr[1] := B;

	    Arr[2] := A;

	    v.Invoke("MySub", Arr);


Где: v - объект, для которого выполняется метод. A,B - значения параметров
 метода (значения должны иметь тип Double), Arr - массив, в который помещены
 значения параметров метода. После выполнения метода в элементе Arr[0]
 будет доступно рассчитанное значение, соответствующее параметру метода
 «C».


## Пример 1


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента OleDocumentBox с наименованием
 OleDocumentBox1.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Excel, Sheet, OleObj, ComButton: Variant;

	    Arr: Array[11];

	Begin

	    OleDocumentBox1.CreateObject("Excel.Sheet.8");

	    Excel := OleDocumentBox1.OleObject.GetProperty("Application");

	    Sheet := Excel.GetProperty("ActiveSheet");

	    OleObj := Sheet.GetProperty("OLEObjects");

	    Arr[0] := 20; //Height

	    Arr[1] := 100; //Width

	    Arr[2] := 10; //Top

	    Arr[3] := 10; //Left

	    Arr[4] := -1; //IconLabel

	    Arr[5] := -1; //IconIndex

	    Arr[6] := ""; //IconFileName

	    Arr[7] := False; //DisplayAsIcon

	    Arr[8] := False; //Link

	    Arr[9] := ""; //FileName

	    Arr[10] := "Forms.CommandButton.1"; //ClassType

	    ComButton := OleObj.Invoke("Add", Arr);

	    ComButton.GetProperty("Object").SetProperty("Caption", "Пуск");

	End Sub Button1OnClick;


При нажатии на кнопку будет создан и загружен в компонент «OleDocumentBox1»
 новый лист Microsoft Excel. На данном листе будет создан элемент управления
 - Кнопка. Для создания элемента управления выполняется метод «Add» коллекции
 «OLEObjects», имеющий следующий синтаксис VBA:


Add(ClassType, FileName, Link, DisplayAsIcon, IconFileName, IconIndex, IconLabel, Left, Top, Width, Height)


При выполнении метода Invoke значения параметров для метода «Add» передаются
 в обратном порядке.


## Пример 2


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента OleDocumentBox с наименованием
 OleDocumentBox1. В компонент OleDocumentBox1 загружен документ Microsoft
 Excel.


	Enum XlFixedFormatType

	    xlTypePDF, xlTypeXPS

	End Enum XlFixedFormatType;


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Excel, Sheet: Variant;

	Begin

	    Excel := OleDocumentBox1.OleObject;

	    Sheet := Excel.GetProperty("ActiveSheet");

	    Sheet.Invoke("ExportAsFixedFormat", "c:\Data.Pdf", XlFixedFormatType.xlTypePDF);

	End Sub Button1OnClick;


При нажатии на кнопку все страницы активного листа документа будут экспортированы
 в формат PDF. Для экспорта используется метод «ExportAsFixedFormat», имеющий
 следующий синтаксис VBA:


ExportAsFixedFormat(


Type,


Filename,


Quality,


IncludeDocProperties,


IgnorePrintAreas,


From,


To,


OpenAfterPublish,


FixedFormatExtClassPtr);


Параметр Type является обязательным, для указания его значения используется
 перечисление XlFixedFormatType. Данное перечисление это Fore-аналог VBA
 перечисления XlFixedFormatType. Все остальные параметры являются необязательными.
 Из их числа указывается только второй параметр - наименование файла, в
 который производится экспорт.


При выполнении метода Invoke значения параметров для метода ExportAsFixedFormat
 передаются в обратном порядке.


См. также:


[Variant](Variant.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
