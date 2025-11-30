# IMetabaseCodeBlock

IMetabaseCodeBlock
-


# IMetabaseCodeBlock


Сборка: Metabase;


## Описание


Интерфейс IMetabaseCodeBlock
 предназначен для динамического выполнения блока кода на Fore.


## Иерархия наследования


IMetabaseCodeBlock


## Комментарии


Для создания объекта, который используется для динамического выполнения
 блока кода на Fore, используйте метод [IMetabase.CreateCodeBlock](../IMetabase/IMetabase.CreateCodeBlock.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ErrorMessage](IMetabaseCodeBlock.ErrorMessage.htm)
		 Свойство ErrorMessage
		 возвращает сообщение об ошибке компилятора.


		 ![](../../Property_Image.gif)
		 [Line](IMetabaseCodeBlock.Line.htm)
		 Свойство Line возвращает
		 номер строки в блоке кода, в которой обнаружена ошибка при синтаксической
		 проверке.


		 ![](../../Property_Image.gif)
		 [Position](IMetabaseCodeBlock.Position.htm)
		 Свойство Position возвращает
		 номер символа в блоке кода, в котором обнаружена ошибка при синтаксической
		 проверке.


		 ![](../../Property_Image.gif)
		 [References](IMetabaseCodeBlock.References.htm)
		 Свойство References
		 определяет подключаемые модули (сборки), в которых хранятся необходимые
		 интерфейсы.


		 ![](../../Property_Image.gif)
		 [Text](IMetabaseCodeBlock.Text.htm)
		 Свойство Text определяет
		 текст блока кода на Fore.


		 ![](../../Property_Image.gif)
		 [Valid](IMetabaseCodeBlock.Valid.htm)
		 Свойство Valid возвращает
		 True, если синтаксическая
		 проверка текста прошла удачно.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Execute](IMetabaseCodeBlock.Execute.htm)
		 Метод Execute выполняет
		 блок кода на Fore и возвращает результат выполнения.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
