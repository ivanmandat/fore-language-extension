# ITabFootnotes

ITabFootnotes
-


# ITabFootnotes


Сборка: Tab;


## Описание


Интерфейс ITabFootnotes содержит
 свойства и методы для работы с коллекцией сносок в таблице.


## Иерархия наследования


           [ITabFootnoteCollection](../ITabFootnoteCollection/ITabFootnoteCollection.htm)


           ITabFootnotes


## Комментарии


Коллекцию сносок таблицы возвращает свойство [ITabSheet.Footnotes](../ITabSheet/ITabSheet.Footnotes.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [BackgroundBrush](ITabFootnotes.BackgroundBrush.htm)
		 Свойство BackgroundBrush
		 определяет кисть, которая будет использоваться для заполнения
		 фона панели сносок.


		 ![](../../Property_Image.gif)
		 [CustomMark](ITabFootnotes.CustomMark.htm)
		 Свойство CustomMark
		 определяет пользовательскую метку, которая будет использоваться
		 для обозначения сносок.


		 ![](../../Property_Image.gif)
		 [CustomMarkFontName](ITabFootnotes.CustomMarkFontName.htm)
		 Свойство CustomMarkFontName
		 определяет наименование шрифта, который будет использоваться для
		 отрисовки меток.


		 ![](../../Property_Image.gif)
		 [Font](ITabFootnotes.Font.htm)
		 Свойство Font определяет
		 шрифт, с помощью которого будет отрисован текст сносок.


		 ![](../../Property_Image.gif)
		 [InUpdate](ITabFootnotes.InUpdate.htm)
		 Свойство InUpdate возвращает
		 признак включенного режима запрета обновления сносок.


		 ![](../../Property_Image.gif)
		 [Location](ITabFootnotes.Location.htm)
		 Свойство Location определяет
		 расположение сносок при разбивке таблицы на отдельные страницы.


		 ![](../../Property_Image.gif)
		 [NumberingRule](ITabFootnotes.NumberingRule.htm)
		 Свойство NumberingRule
		 определяет правило нумерации сносок для различных таблиц нескольких
		 листов.


		 ![](../../Property_Image.gif)
		 [NumberStyle](ITabFootnotes.NumberStyle.htm)
		 Свойство NumberStyle
		 определяет стиль цифр, который используется для нумерации сносок.


		 ![](../../Property_Image.gif)
		 [StartingNumber](ITabFootnotes.StartingNumber.htm)
		 Свойство StartingNumber
		 определяет стартовое значение, начиная с которого производится
		 автоматическая нумерация сносок.


		 ![](../../Property_Image.gif)
		 [UniqueNumbers](ITabFootnotes.UniqueNumbers.htm)
		 Свойство UniqueNumbers
		 определяет, будут ли иметь уникальные номера сноски с одинаковым
		 текстом.


## Свойства, унаследованные от [ITabFootnoteCollection](../ITabFootnoteCollection/ITabFootnoteCollection.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](../ITabFootnoteCollection/ITabFootnoteCollection.Count.htm)
		 Свойство Count возвращает
		 количество сносок в коллекции.


		 ![](../../Property_Image.gif)
		 [IndexOf](../ITabFootnoteCollection/ITabFootnoteCollection.IndexOf.htm)
		 Свойство IndexOf возвращает
		 для указанной сноски индекс в коллекции.


		 ![](../../Property_Image.gif)
		 [Item](../ITabFootnoteCollection/ITabFootnoteCollection.Item.htm)
		 Свойство Item возвращает
		 параметры сноски с указанным индексом.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [BeginUpdate](ITabFootnotes.BeginUpdate.htm)
		 Метод BeginUpdate отключает
		 обновление сносок для экономии времени, связанного с их прорисовкой
		 и обновлением данных в сносках.


		 ![](../../Sub_Image.gif)
		 [EndUpdate](ITabFootnotes.EndUpdate.htm)
		 Метод EndUpdate возобновляет
		 обновление сносок.


## Методы, унаследованные от [ITabFootnoteCollection](../ITabFootnoteCollection/ITabFootnoteCollection.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](../ITabFootnoteCollection/ITabFootnoteCollection.Add.htm)
		 Метод Add создает для
		 указанной ячейки сноску и возвращает её параметры.


		 ![](../../Sub_Image.gif)
		 [Clear](../ITabFootnoteCollection/ITabFootnoteCollection.Clear.htm)
		 Метод Clear очищает
		 коллекцию сносок.


		 ![](../../Sub_Image.gif)
		 [Remove](../ITabFootnoteCollection/ITabFootnoteCollection.Remove.htm)
		 Метод Remove удаляет
		 указанную сноску из коллекции и возвращает признак удачного удаления.


		 ![](../../Sub_Image.gif)
		 [RemoveAt](../ITabFootnoteCollection/ITabFootnoteCollection.RemoveAt.htm)
		 Метод RemoveAt удаляет
		 сноску с указанным индексом из коллекции и возвращает признак
		 удачного удаления.


См. также:


[Интерфейсы
 сборки Tab](../TabSheet_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
