# ICultureInfo.FormatDoubleWithGroupingSeparator

ICultureInfo.FormatDoubleWithGroupingSeparator
-


# ICultureInfo.FormatDoubleWithGroupingSeparator


## Синтаксис


FormatDoubleWithGroupingSeparator(Value: Double):
 String;


## Параметры


Value. Значение, приводимое
 к строковому типу.


## Описание


Метод FormatDoubleWithGroupingSeparator
 преобразует вещественное значение к строковому типу в соответствии с настройками
 региональных стандартов и с разделением на группы разрядов.


## Пример


	Sub UserProc;

	Var

	    CF: ICultureInfo;

	    s: String;

	Begin

	    CF := CultureInfo.Current;

	    s := CF.FormatDoubleWithGroupingSeparator(12312300000.1123);

	End Sub UserProc;


После выполнения примера в переменной «s» будет
 содержаться строковое представление числа «12312300000.1123» с разделением
 на группы разрядов. Если для русских настроек в качестве разделителя разрядов
 задан символ «_», то будет получено значение «12_312_300_000,1123».


См. также:


[ICultureInfo](ICultureInfo.htm) | [ICultureInfo.FormatDouble](ICultureInfo.FormatDouble.htm)
 | [ICultureInfo.FormatDoublePrec](ICultureInfo.FormatDoublePrec.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
