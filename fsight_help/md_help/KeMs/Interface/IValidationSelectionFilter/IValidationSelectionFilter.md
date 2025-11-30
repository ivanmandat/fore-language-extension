# IValidationSelectionFilter

IValidationSelectionFilter
-


# IValidationSelectionFilter


Сборка: Ms;


## Описание


Интерфейс IValidationSelectionFilter
 предназначен для работы с фильтром, ограничивающим ряды, проверяемые правилом
 валидации.


## Иерархия наследования


           IValidationSelectionFilter


## Комментарии


Фильтр представляет собой набор отметок по измерениям источника данных
 рядов. Каждый элемент фильтра задаёт отметку одного измерения. Для получения
 фильтра используйте свойство [IValidationDetails.SelectionFilter](../IValidationDetails/IValidationDetails.SelectionFilter.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IValidationSelectionFilter.Count.htm)
		 Свойство Count
		 возвращает количество элементов в фильтре.


		 ![](../../Property_Image.gif)
		 [Item](IValidationSelectionFilter.Item.htm)
		 Свойство Item
		 возвращает указанный элемент из фильтра.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IValidationSelectionFilter.Add.htm)
		 Метод Add добавляет
		 в фильтр новый элемент.


		 ![](../../Sub_Image.gif)
		 [Clear](IValidationSelectionFilter.Clear.htm)
		 Метод Clear очищает
		 фильтр.


		 ![](../../Sub_Image.gif)
		 [FindById](IValidationSelectionFilter.FindById.htm)
		 Метод FindById
		 выполняет поиск элемента фильтра по идентификатору отметки.


		 ![](../../Sub_Image.gif)
		 [FindByKey](IValidationSelectionFilter.FindByKey.htm)
		 Метод FindByKey выполняет
		 поиск элемента фильтра по ключу отметки.


		 ![](../../Sub_Image.gif)
		 [Remove](IValidationSelectionFilter.Remove.htm)
		 Метод Remove
		 удаляет указанный элемент из фильтра.


		 ![](../../Sub_Image.gif)
		 [RemoveByKey](IValidationSelectionFilter.RemoveByKey.htm)
		 Метод RemoveByKey
		 удаляет из фильтра элемент, соответствующий отметке с указанным
		 ключом.


См. также:


[Интерфейсы
 сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
