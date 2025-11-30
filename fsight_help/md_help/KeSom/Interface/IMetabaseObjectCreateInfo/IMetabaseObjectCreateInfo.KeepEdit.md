# IMetabaseObjectCreateInfo.KeepEdit

IMetabaseObjectCreateInfo.KeepEdit
-


# IMetabaseObjectCreateInfo.KeepEdit


## Синтаксис


KeepEdit: Boolean;


## Описание


Свойство KeepEdit определяет
 признак нахождения объекта репозитория в состоянии редактирования после
 создания.


## Комментарии


Допустимые значения:


	- True. После выполнения
	 метода [IMetabase.CreateObject](../IMetabase/IMetabase.CreateObject.htm)
	 созданный объект будет находиться в состоянии редактирования. Это
	 позволяет сразу привести созданный объект к нужному интерфейсу и настроить
	 специфические свойства;


	- False. Для изменения
	 специфических свойств созданного объекта его будет необходимо открыть
	 на редактирование с помощью метода [IMetabaseObjectDescriptor.Edit](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Edit.htm).


## Пример


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    m: IModule;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_MODULE;

    CrInfo.Parent := MB.Root;

    CrInfo.KeepEdit := True;

    m := MB.CreateObject(CrInfo) As IModule;

    m.Text := "Sub Main;" + #13 + #10 +

            "Begin" + #13 + #10 +

            "End Sub Main;";

    (m As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 новый модуль. Для указания заготовки процедуры «Main» в модуле структура
 модуля остается открытой на редактирование после выполнения метода I[Metabase.CreateObject](../IMetabase/IMetabase.CreateObject.htm).


См. также:


[IMetabaseObjectCreateInfo](IMetabaseObjectCreateInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
