# ResourceManager.detachResourceFiles

ResourceManager.detachResourceFiles
-


# ResourceManager.detachResourceFiles


## Синтаксис


detachResourceFiles(cultureInfo: [PP.CultureInfo](../CultureInfo/CultureInfo.htm));


## Параметры


cultureInfo. Язык, для которого необходимо отсоединить все ресурсные файлы.


## Описание


Метод detachResourceFiles отсоединяет все ресурсные файлы для указанного языка.


## Пример


Перед выполнением примера необходимо запустить сценарий, приведённый на странице описания метода [ResourceManager.load](ResourceManager.load.htm). Отсоединим все ресурсные файлы для английского языка и проверим результат выполнения данной операции:


// Удалим ресурсные файлы для английского языка
resourceManager.detachResourceFiles(PP.Cultures.en);
// Определим строку по ключу «dateTimeEditMonthNames1» на разных языках
userProc();

После выполнения примера в консоли браузера было выведено значение, соответствующее ресурсному ключу «dateTimeEditMonthNames1» для русского и английского языка:


Строка по ключу «dateTimeEditMonthNames1» для русского языка: январь


Строка по ключу «dateTimeEditMonthNames1» для английского языка не определена


Как видно, ресурсные файлы для английского языка были удалены.


См. также:


[ResourceManager](ResourceManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
