# ILindoSettings.DLLPath

ILindoSettings.DLLPath
-


# ILindoSettings.DLLPath


## Синтаксис


DLLPath: String;


## Описание


Свойство DLLPath определяет
 путь до библиотеки LINDO.


## Комментарии


Путь должен содержать название файла библиотеки LINDO.


Библиотека LINDO по умолчанию расположена в папке S\bin\win32\
 или S\bin\win64\, в зависимости
 от разрядности используемой версии, где S
 - это путь до папки, в которой установлен LINDO. Наименование файла библиотеки
 - lindoX.dll, где X - это
 номер версии LINDO. Например, для LINDO версии 8.0 библиотека будет иметь
 название lindo8_0.dll, а для
 64-х разрядной версии 9.0 - lindo64_9_0.dll.


## Пример


Использование свойства приведено в примере для [ISmNonLinearOptimization.LindoSettings](../ISmNonLinearOptimization/ISmNonLinearOptimization.LindoSettings.htm).


См. также:


[ILindoSettings](ILindoSettings.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
