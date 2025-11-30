# IAdoMdCubeExecutor

IAdoMdCubeExecutor
-


# IAdoMdCubeExecutor


Сборка: AdoMd;


## Описание


Интерфейс IAdoMdCubeExecutor
 содержит свойства и методы для выполнения различных MDX-запросов к кубу.


## Иерархия наследования


IAdoMdCubeExecutor


## Комментарии


Для получения объекта, позволяющего выполнять различные MDX-запросы
 к кубу, необходимо в коде выполнить следующие шаги:


	- Получить ADOMD-куб в репозитории, [открыть](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)
	 его и привести к интерфейсу [ICubeInstance](KeCubes.chm::/Interface/ICubeInstance/ICubeInstance.htm);


	- Получить необходимый [вариант
	 отображения](KeCubes.chm::/Interface/ICubeInstance/ICubeInstance.Destinations.htm) куба, для дальнейшей работы с данными;


	- [Создать
	 вычислитель куба](KeCubes.chm::/Interface/ICubeInstanceDestination/ICubeInstanceDestination.CreateExecutor.htm) и привести его к интерфейсу IAdoMdCubeExecutor.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [MdxQuery](IAdoMdCubeExecutor.MdxQuery.htm)
		 Свойство MdxQuery определяет
		 произвольный MDX-запрос к кубу.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OpenCellset](IAdoMdCubeExecutor.OpenCellset.htm)
		 Метод OpenCellset возвращает
		 аналитические данные, полученные в результате выполнения произвольного
		 MDX-запроса к кубу.


См. также:


[Интерфейсы
 сборки AdoMd](../KeAdoMd_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
