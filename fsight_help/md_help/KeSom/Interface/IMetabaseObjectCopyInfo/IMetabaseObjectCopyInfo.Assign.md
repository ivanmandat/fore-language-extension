# IMetabaseObjectCopyInfo.Assign

IMetabaseObjectCopyInfo.Assign
-


# IMetabaseObjectCopyInfo.Assign


## Синтаксис


Assign: Boolean;


## Описание


Свойство Assign определяет признак
 создания копии объекта вместе с его источником данных.


## Комментарии


По умолчанию свойству установлено значение False,
 при этом осуществляется копирование на основании описания объекта, указанного
 в свойстве [Source](IMetabaseObjectCopyInfo.Source.htm).
 При установке свойству значения True,
 в свойстве [Source](IMetabaseObjectCopyInfo.Source.htm)
 необходимо указывать сам копируемый объект, при этом будет создаваться
 копия объекта и копия его источника данных вместе с данными.


## Пример


Для выполнения примера предполагается наличие контейнера моделирования
 с идентификатором CONT_MODEL. В данном контейнере имеется переменная моделирования
 с идентификатором Var_1.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cont: IMetabaseObjectDescriptor;

	    CInfo: IMetabaseObjectCopyInfo;

	Begin

	    MB := MetabaseClass.Active;

	    Cont := MB.ItemById("CONT_MODEL");

	    CInfo := MB.CreateCopyInfo;

	    CInfo.Id := "Copy_Var_1";

	    CInfo.Name := "Копия переменной Var_1";

	    CInfo.Destination := Cont;

	    CInfo.Source := MB.ItemByIdNamespace("VAR_1", Cont.Key).Bind;

	    CInfo.Assign := True;

	    MB.CopyObject(CInfo);

	End Sub UserProc;


После выполнения примера в контейнере моделирования будет создана копия
 переменной. Также при копировании будет создана копия автоматического
 куба, на котором основана переменная.


См. также:


[IMetabaseObjectCopyInfo](IMetabaseObjectCopyInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
