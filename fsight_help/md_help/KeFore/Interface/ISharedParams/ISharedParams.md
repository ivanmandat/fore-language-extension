# ISharedParams

ISharedParams
-


# ISharedParams


Сборка: Fore;


## Описание


Интерфейс ISharedParams предназначен
 для работы с глобальными переменными.


## Иерархия наследования


ISharedParams


## Комментарии


Для чтения текущего значения глобальной переменной следует использовать
 свойство [IMetabaseCache.SharedValue](KeSom.chm::/Interface/IMetabaseCache/IMetabaseCache.SharedValue.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DefaultBehaviour](ISharedParams.DefaultBehaviour.htm)

		 Свойство DefaultBehaviour
		 возвращает объект для работы с [настройками по
		 умолчанию](UiNav.chm::/02_Navigator/Repo_Default.htm).


		 ![](../../Property_Image.gif)
		 [EtlTemplates](ISharedParams.EtlTemplates.htm)
		 Свойство EtlTemplates
		 возвращает коллекцию пользовательских шаблонов источников/приёмников.


		 ![](../../Property_Image.gif)
		 [EventHandlers](ISharedParams.EventHandlers.htm)
		 Свойство EventHandlers
		 возвращает объект для работы с [обработчиками
		 событий](UiDevEnv.chm::/04_NavigatorSetting/EventHandler.htm) отчетов.


		 ![](../../Property_Image.gif)
		 [IsShared](ISharedParams.IsShared.htm)
		 Свойство IsShared определяет
		 признак глобального объекта.


		 ![](../../Property_Image.gif)
		 [Methods](ISharedParams.Methods.htm)
		 Свойство Methods возвращает
		 коллекцию пользовательских методов.


		 ![](../../Property_Image.gif)
		 [NameResource](ISharedParams.NameResource.htm)
		 Свойство NameResource
		 определяет строковый ресурс, значения которого будут использоваться
		 для наименований глобальных переменных.


		 ![](../../Property_Image.gif)
		 [Params](ISharedParams.Params.htm)
		 Свойство Params возвращает
		 коллекцию глобальных переменных.


		 ![](../../Property_Image.gif)
		 [ParamValues](ISharedParams.ParamValues.htm)
		 Свойство ParamValues
		 позволяет задавать текущие параметры глобальных переменных.


		 ![](../../Property_Image.gif)
		 [Resource](ISharedParams.Resource.htm)
		 Свойство Resource определяет
		 [ресурсы](UiDevEnv.chm::/01_Development_Environment/07_MultiLng_Applications/Resource.htm),
		 из которого будут браться текстовые значения в зависимости от
		 используемого [языка
		 репозитория](Setup.chm::/06_AK_Client_Config/UiNav_RepoConfig_repo1.htm#lang).


		 ![](../../Property_Image.gif)
		 [SearchEngine](ISharedParams.SearchEngine.htm)
		 Свойство SearchEngine
		 определяет параметры поисковой платформы репозитория.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ApplyParamValues](ISharedParams.ApplyParamValues.htm)
		 Метод ApplyParamValues
		 применяет параметры глобальных переменных, заданные с помощью
		 свойства [ParamValues](ISharedParams.ParamValues.htm).


См. также:


[Интерфейсы сборки Fore](../KeFore_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
