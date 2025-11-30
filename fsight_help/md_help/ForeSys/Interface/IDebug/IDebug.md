# IDebug

IDebug
-


# IDebug


Сборка: System;


## Описание


Интерфейс IDebug содержит статические
 свойства и методы класса [Debug](../../Class/Debug/Debug.htm),
 используемого для вывода отладочной информации.


## Иерархия наследования


           IDebug


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [IndentLevel](IDebug.IndentLevel.htm)
		 Свойство IndentLevel
		 определяет уровень отступа в консоли среды разработки.


		 ![](../../Property_Image.gif)
		 [IndentSize](IDebug.IndentSize.htm)
		 Свойство IndentSize
		 определяет шаг одного отступа.


		 ![](../../Property_Image.gif)
		 [IsLinux](IDebug.IsLinux.htm)
		 Свойство IsLinux возвращает
		 признак выполнения кода в операционной системе семейства Linux.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Assert](IDebug.Assert.htm)
		 Метод Assert проверяет
		 условие Condition, и выводит
		 пользовательское сообщение об ошибке "Assert failed",
		 если условие принимает значение False.


		 ![](../../Sub_Image.gif)
		 [AssertMsg](IDebug.AssertMsg.htm)
		 Метод AssertMsg проверяет
		 условие Condition, и выводит
		 пользовательское сообщение об ошибке, если условие принимает значение
		 False.


		 ![](../../Sub_Image.gif)
		 [Fail](IDebug.Fail.htm)
		 Метод Fail осуществляет
		 вывод сообщения об ошибке.


		 ![](../../Sub_Image.gif)
		 [Indent](IDebug.Indent.htm)
		 Метод Indent осуществляет
		 установку отступа в консоли на следующий уровень.


		 ![](../../Sub_Image.gif)
		 [Unindent](IDebug.Unindent.htm)
		 Метод Unindent осуществляет
		 установку отступа в консоли на предыдущий уровень.


		 ![](../../Sub_Image.gif)
		 [Write](IDebug.Write.htm)
		 Метод Write осуществляет
		 вывод значения, без перевода курсора на новую строку.


		 ![](../../Sub_Image.gif)
		 [WriteIf](IDebug.WriteIf.htm)
		 Метод WriteIf осуществляет
		 вывод значения, без перевода курсора на новую строку, в случае
		 выполнения установленного условия.


		 ![](../../Sub_Image.gif)
		 [WriteLine](IDebug.WriteLine.htm)
		 Метод WriteLine осуществляет
		 вывод значения, с переводом курсора на новую строку.


		 ![](../../Sub_Image.gif)
		 [WriteLineIf](IDebug.WriteLineIf.htm)
		 Метод WriteLineIf осуществляет
		 вывод значения, с переводом курсора на новую строку, в случае
		 выполнения установленного условия.


См. также:


[Интерфейсы сборки System](../System_interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
