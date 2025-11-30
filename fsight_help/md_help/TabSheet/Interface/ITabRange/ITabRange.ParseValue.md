# ITabRange.ParseValue

ITabRange.ParseValue
-


# ITabRange.ParseValue


## Синтаксис


ParseValue(Value: String);


## Параметры


Value. Значение,
 которое необходимо преобразовать.


## Описание


Метод ParseValue преобразует
 значение из строки, передаваемой посредством параметра Value,
 в соответствии с его типом и устанавливает данное значение для диапазона.


## Комментарии


При вызове метода осуществляется автоматическое определение типа значения,
 передаваемого в символьной строке Value.
 В соответствии с типом значения сразу же будет применено форматирование
 ячеек диапазона в таблице. Для значений, имеющих тип Дата, в редактор
 ячейки будет встроен календарь.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiTabSheet с наименованием
 «UiTabSheet1». «UiTabSheet1» установлен в качестве источника данных для
 компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    r, r1, r2, r3: ITabRange;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    r := TSheet.Cell(0, 0);

	    r1 := TSheet.Cell(0, 1);

	    r2 := TSheet.Cell(0, 2);

	    r3 := TSheet.Cell(0, 3);

	    //Установка значений с использованием метода ParseValue

	    r.ParseValue("100");

	    Debug.WriteLine(r.Value.VarType);

	    r1.ParseValue("01.01.2001");

	    Debug.WriteLine(r1.Value.VarType);

	    //Установка значений через свойство Value

	    r2.Value := "100";

	    Debug.WriteLine(r2.Value.VarType);

	    r3.Value := "01.01.2001";

	    Debug.WriteLine(r3.Value.VarType);

	End Sub Button1OnClick;


При выполнении примера для ячеек в диапазоне «A0:D0» будут установлены
 значения разными способами. Типы данных, которые будут иметь значения
 в ячейках, будут выведены в консоль среды разработки.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
