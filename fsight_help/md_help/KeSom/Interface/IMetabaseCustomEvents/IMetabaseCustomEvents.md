# IMetabaseCustomEvents

IMetabaseCustomEvents
-


# IMetabaseCustomEvents


Сборка: Metabase;


## Описание


Интерфейс IMetabaseCustomEvents
 описывает пользовательские события, которые обрабатываются при работе
 в репозитории из веб-сервиса.


## Иерархия наследования


IMetabaseCustomEvents


## Комментарии


Методы данного интерфейса должны быть переопределены в пользовательском
 классе. Для того чтобы события обрабатывались, необходимо задать следующие
 настройки:


	- Свойству [IMetabaseDefinition.CheckCustomEvents](../IMetabaseDefinition/IMetabaseDefinition.CheckCustomEvents.htm)
	 установить значение True.


	- Для репозитория установить [специальный
	 объект](../IMetabase/IMetabase.SpecialObject.htm) [MetabaseSpecialObject.MetabaseCustomEvents](../../Enums/MetabaseSpecialObject.htm),
	 в качестве объекта указывается модуль, содержащий реализацию интерфейса
	 IMetabaseCustomEvents.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnBeforeLogon](IMetabaseCustomEvents.OnBeforeLogon.htm)
		 Метод OnBeforeLogon
		 реализует событие, которое наступает перед подключением к репозиторию
		 с помощью веб-сервиса.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
