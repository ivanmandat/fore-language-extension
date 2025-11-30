# IMbElementDependencies

IMbElementDependencies
-


# IMbElementDependencies


Сборка: Metabase;


## Описание


Интерфейс IMbElementDependencies
 содержит свойства и методы для работы с коллекцией записей о зависимости
 объектов от элементов справочников НСИ.


## Иерархия наследования


           IMbElementDependencies


## Комментарии


Создание новых зависимостей, либо удаление существующих, ведет к изменению
 признака наличия изменений в коллекции [Modified](IMbElementDependencies.Modified.htm).
 Для сохранения в базу данных репозитория изменений в коллекции используйте
 свойство [IMbElementDependenciesDatabase.Update](../IMbElementDependenciesDatabase/IMbElementDependenciesDatabase.Update.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IMbElementDependencies.Count.htm)
		 Метод Count возвращает
		 количество зависимостей в коллекции.


		 ![](../../Property_Image.gif)
		 [Database](IMbElementDependencies.Database.htm)
		 Свойство Database возвращает
		 родительский объект, содержащий информацию о всех зависимостях
		 объектов репозитория от элементов справочников НСИ.


		 ![](../../Property_Image.gif)
		 [Item](IMbElementDependencies.Item.htm)
		 Свойство Item возвращает
		 запись о зависимости объекта от элементов справочника НСИ.


		 ![](../../Property_Image.gif)
		 [Modified](IMbElementDependencies.Modified.htm)
		 Свойство Modified возвращает
		 признак наличия изменений в коллекции.


		 ![](../../Property_Image.gif)
		 [Where](IMbElementDependencies.Where.htm)
		 Свойство Where определяет
		 шаблон зависимостей, на основе которого получена данная коллекция.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IMbElementDependencies.Add.htm)
		 Метод Add осуществляет
		 создание новой записи о зависимости на основании информации, передаваемой
		 в шаблоне.


		 ![](../../Sub_Image.gif)
		 [Clear](IMbElementDependencies.Clear.htm)
		 Метод Clear осуществляет
		 удаление всех зависимостей.


		 ![](../../Sub_Image.gif)
		 [Remove](IMbElementDependencies.Remove.htm)
		 Метод Remove осуществляет
		 удаление записи о зависимости объекта из коллекции.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
