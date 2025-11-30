# ICultureInfo.FormatDoublePrec

ICultureInfo.FormatDoublePrec
-


# ICultureInfo.FormatDoublePrec


## Синтаксис


FormatDoublePrec(Value: Double; Precision: Integer):
 String;


## Параметры


Value. Значение, приводимое
 к строковому типу;


Precision. Точность числа (количество
 знаков после запятой). Точность числа может быть указана в диапазоне [0,
 14].


## Описание


Метод FormatDoublePrec округляет
 вещественное значение до заданной точности и преобразует к строковому
 типу в соответствии с настройками региональных стандартов.


## Пример


	Sub UserProc;

	Var

	    CF: ICultureInfo;

	    s: String;

	Begin

	    CF := CultureInfo.Current;

	    s := CF.FormatDoublePrec(12312300000.1123, 2);

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться строковое
 представление числа «12312300000.1123», округлённое до двух знаков после
 запятой. Для русских настроек региональных стандартов будет значение «12312300000,11».


См. также:


[ICultureInfo](ICultureInfo.htm) | [ICultureInfo.FormatDouble](ICultureInfo.FormatDouble.htm)
 | [ICultureInfo.FormatDoubleWithGroupingSeparator](ICultureInfo.FormatDoubleWithGroupingSeparator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
