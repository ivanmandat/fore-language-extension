# Debug

Debug
-


# Debug


## Описание


Класс Debug реализует объект,
 используемый для вывода отладочных сообщений.


## Статические свойства класса, унаследованные от [IDebug](../../Interface/IDebug/IDebug.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [IndentLevel](../../Interface/IDebug/IDebug.IndentLevel.htm)
		 Свойство IndentLevel
		 определяет уровень отступа в консоли среды разработки.


		 ![](../../Property_Image.gif)
		 [IndentSize](../../Interface/IDebug/IDebug.IndentSize.htm)
		 Свойство IndentSize
		 определяет шаг одного отступа.


		 ![](../../Property_Image.gif)
		 [IsLinux](../../Interface/IDebug/IDebug.IsLinux.htm)
		 Свойство IsLinux возвращает
		 признак выполнения кода в операционной системе семейства Linux.


## Статические методы класса, унаследованные от [IDebug](../../Interface/IDebug/IDebug.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Assert](../../Interface/IDebug/IDebug.Assert.htm)
		 Метод Assert проверяет
		 условие Condition, и выводит
		 пользовательское сообщение об ошибке "Assert failed",
		 если условие принимает значение False.


		 ![](../../Sub_Image.gif)
		 [AssertMsg](../../Interface/IDebug/IDebug.AssertMsg.htm)
		 Метод AssertMsg проверяет
		 условие Condition, и выводит
		 пользовательское сообщение об ошибке, если условие принимает значение
		 False.


		 ![](../../Sub_Image.gif)
		 [Fail](../../Interface/IDebug/IDebug.Fail.htm)
		 Метод Fail осуществляет
		 вывод сообщения об ошибке.


		 ![](../../Sub_Image.gif)
		 [Indent](../../Interface/IDebug/IDebug.Indent.htm)
		 Метод Indent осуществляет
		 установку отступа в консоли на следующий уровень.


		 ![](../../Sub_Image.gif)
		 [Unindent](../../Interface/IDebug/IDebug.Unindent.htm)
		 Метод Unindent осуществляет
		 установку отступа в консоли на предыдущий уровень.


		 ![](../../Sub_Image.gif)
		 [Write](../../Interface/IDebug/IDebug.Write.htm)
		 Метод Write осуществляет
		 вывод значения, без перевода курсора на новую строку.


		 ![](../../Sub_Image.gif)
		 [WriteIf](../../Interface/IDebug/IDebug.WriteIf.htm)
		 Метод WriteIf осуществляет
		 вывод значения, без перевода курсора на новую строку, в случае
		 выполнения установленного условия.


		 ![](../../Sub_Image.gif)
		 [WriteLine](../../Interface/IDebug/IDebug.WriteLine.htm)
		 Метод WriteLine осуществляет
		 вывод значения, с переводом курсора на новую строку.


		 ![](../../Sub_Image.gif)
		 [WriteLineIf](../../Interface/IDebug/IDebug.WriteLineIf.htm)
		 Метод WriteLineIf осуществляет
		 вывод значения, с переводом курсора на новую строку, в случае
		 выполнения установленного условия.


См. также:


[Классы сборки System](../System_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
