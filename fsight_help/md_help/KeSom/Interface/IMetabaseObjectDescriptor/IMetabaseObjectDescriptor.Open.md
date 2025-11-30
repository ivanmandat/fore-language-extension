# IMetabaseObjectDescriptor.Open

IMetabaseObjectDescriptor.Open
-


# IMetabaseObjectDescriptor.Open


## Синтаксис


Open(Params: [IMetabaseObjectParamValues](../IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm)):
 [IMetabaseObjectInstance](../IMetabaseObjectInstance/IMetabaseObjectInstance.htm);


## Параметры


Params. Значения параметров,
 с которыми осуществляется открытие объекта.


## Описание


Метод Open осуществляет открытие
 объекта и возвращает его данные.


## Комментарии


Метод Open создает экземпляр
 объекта, но при этом не открывает его в визуальном интерфейсе. В визуальном
 интерфейсе могут быть открыты только формы. Для открытия визуального интерфейса
 других объектов репозитория используйте команду [Object.Open](UiLib.chm::/Interface/IUiCommandTarget/Command/Object.Open.htm).


Значение параметра Params зависит
 от следующих условий:


	- если объект содержит параметры, то используйте метод [IMetabaseObjectParams.CreateEmptyValues](../IMetabaseObjectParams/IMetabaseObjectParams.CreateEmptyValues.htm)
	 для указания значений параметров;


	- если объект не содержит параметры, то используйте значение Null.


## Примеры


Для выполнения примера предполагается наличие в репозитории формы с
 идентификатором FORM.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	Begin

	    // Получим текущий
	 репозиторий

	    MB := MetabaseClass.Active;

	    // Получим форму

	    MObj := MB.ItemById("FORM").Bind;

	    // Откроем форму
	 без параметров

	    MObj.Open(Null);

	End Sub UserProc;


В результате выполнения примера будет открыта форма с указанным идентификатором
 без параметров.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
