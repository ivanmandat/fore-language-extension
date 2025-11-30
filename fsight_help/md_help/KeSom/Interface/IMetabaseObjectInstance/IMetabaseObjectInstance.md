# IMetabaseObjectInstance

IMetabaseObjectInstance
-


# IMetabaseObjectInstance


Сборка: Metabase;


## Описание


Интерфейс IMetabaseObjectInstance
 содержит базовые свойства и методы для работы с открытым экземпляром объекта
 репозитория.


## Иерархия наследования


           IMetabaseObjectInstance


## Комментарии


Для открытия объекта репозитория выполните метод [IMetabaseObjectDescriptor.Open](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)
 или [IMetabaseObjectDescriptor.OpenWithParam](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.OpenWithParam.htm).
 Полученный объект, описываемый интерфейсом IMetabaseObjectInstance,
 позволяет получить базовую информацию об экземпляре объекта (исходный
 объект, который был открыт; параметры, которые были использованы при открытии).


Для полноценной работы с определенным видом открытого объекта предназначены
 специфические интерфейсы, например [IDatasetInstance](KeDb.chm::/Interface/IDatasetInstance/IDatasetInstance.htm)
 - для работы с наборами данных, [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm)
 - для работы со справочниками, [ICubeInstance](KeCubes.chm::/Interface/ICubeInstance/ICubeInstance.htm)
 - для работы с кубами и другие. Приведите к необходимому интерфейсу открытый
 экземпляр объекта для работы с его данными и прочих доступных специфических
 действий.


После открытия для полученного экземпляра объекта выделяется память,
 также экземпляр помещается в кеш репозитория. При повторном открытии объекта
 будет получен экземпляр из кеша репозитория. Если при работе с экземпляром
 объекта осуществляется изменение данных, то экземпляр извлекается из кеша
 и используется отдельно. При этом повторное открытие приведёт к созданию
 нового экземпляра объекта с выделением для него памяти и помещением в
 кеш. Необходимо учитывать данное поведение при разработке прикладного
 кода с целью избежания открытия лишних экземпляров объектов и, как следствие,
 чрезмерного расхода оперативной памяти. Неиспользуемые экземпляры объектов
 будут удалены [сборщиком
 мусора](KnowledgeBase.chm::/01_Fore/KB000030/KnowledgeBase_KB000030_2.htm) в моменты простоя прикладной системы. Также
 для удаления экземпляра объекта в соответствии с прикладной логикой может
 применяться оператор [Dispose](Fore.chm::/08_Operators/fore_dispose.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Data](IMetabaseObjectInstance.Data.htm)
		 Свойство Data определяет
		 данные объекта репозитория, с открытым экземпляром которого
		 осуществляется работа.


		 ![](../../Property_Image.gif)
		 [Key](IMetabaseObjectInstance.Key.htm)
		 Свойство Key возвращает
		 ключ объекта репозитория, с открытым экземпляром которого осуществляется
		 работа.


		 ![](../../Property_Image.gif)
		 [Object](IMetabaseObjectInstance.Object.htm)
		 Свойство Object возвращает
		 объект репозитория, с открытым экземпляром которого осуществляется
		 работа.


		 ![](../../Property_Image.gif)
		 [ParamValues](IMetabaseObjectInstance.ParamValues.htm)
		 Свойство ParamValues
		 возвращает коллекцию значений параметров объекта, которые были
		 указаны при открытии.


		 ![](../../Property_Image.gif)
		 [ThisObject](IMetabaseObjectInstance.ThisObject.htm)
		 Свойство ThisObject
		 возвращает структуру объекта, если открываемый объект является
		 ярлыком для объекта из другого репозитория.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Flush](IMetabaseObjectInstance.Flush.htm)
		 Метод Flush осуществляет
		 очистку кеша экземпляра объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [GetExtensionDispatch](IMetabaseObjectInstance.GetExtensionDispatch.htm)
		 Метод GetExtensionDispatch
		 осуществляет преобразование к общей форме объекта, от которой
		 в дальнейшем можно перейти к необходимому классу объектов.


		 ![](../../Sub_Image.gif)
		 [InitControlledParams](IMetabaseObjectInstance.InitControlledParams.htm)
		 Метод InitControlledParams
		 осуществляет вычисление выражений управления параметрами вложенного
		 объекта.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
