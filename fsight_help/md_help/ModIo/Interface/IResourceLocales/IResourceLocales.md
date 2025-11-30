# IResourceLocales

IResourceLocales
-


# IResourceLocales


Сборка: IO;


## Описание


Интерфейс IResourceLocales
 содержит свойства и методы коллекции языков редактора ресурсов.


## Иерархия наследования


           IResourceLocales


## Комментарии


Изначально в ресурсах всегда содержится один язык, являющийся языком
 по умолчанию. Он используется для отображения значений на [языке по умолчанию](UiNav.chm::/02_Navigator/Repo_Default.htm) для
 репозитория. Для корректной работы языки по умолчанию в ресурсах и в репозитории
 должны совпадать.


После создания в ресурсах содержится один язык, установленный для текущего [репозитория по умолчанию](UiNav.chm::/02_Navigator/Repo_Default.htm). Если для репозитория не задан язык по умолчанию,
 то в ресурсах будет содержатся язык, соответствующий языку интерфейса
 платформы. Данный язык будет являться языком по умолчанию для ресурсов.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IResourceLocales.Count.htm)


		 Свойство Count
		 возвращает количество доступных языков в редакторе ресурсов.


		 ![](../../Property_Image.gif)
		 [CurrentLocale](IResourceLocales.CurrentLocale.htm)


		 Свойство CurrentLocale
		 возвращает язык редактора ресурсов, с которым было осуществлено
		 подключение к репозиторию.


		 ![](../../Property_Image.gif)
		 [DefaultLocale](IResourceLocales.DefaultLocale.htm)


		 Свойство DefaultLocale
		 возвращает язык редактора ресурсов, установленный по умолчанию.


		 ![](../../Property_Image.gif)
		 [Item](IResourceLocales.Item.htm)


		 Свойство Item возвращает
		 язык редактора ресурсов.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IResourceLocales.Add.htm)


		 Метод Add добавляет
		 язык с указанным ключом в редактор ресурсов.


		 ![](../../Sub_Image.gif)
		 [Clear](IResourceLocales.Clear.htm)


		 Метод Clear удаляет
		 все языки из редактора ресурсов.


		 ![](../../Sub_Image.gif)
		 [FindById](IResourceLocales.FindById.htm)


		 Метод FindById
		 выполняет поиск языка ресурсов по заданному идентификатору.


		 ![](../../Sub_Image.gif)
		 [FindByKey](IResourceLocales.FindByKey.htm)


		 Метод FindByKey
		 выполняет поиск языка ресурсов по заданному ключу.


		 ![](../../Sub_Image.gif)
		 [Remove](IResourceLocales.Remove.htm)


		 Метод Remove
		 удаляет язык с указанным индексом.


		 ![](../../Sub_Image.gif)
		 [RemoveByKey](IResourceLocales.RemoveByKey.htm)


		 Метод RemoveByKey
		 удаляет язык с указанным ключом.


См. также:


[Интерфейсы сборки IO](../ModIo_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
