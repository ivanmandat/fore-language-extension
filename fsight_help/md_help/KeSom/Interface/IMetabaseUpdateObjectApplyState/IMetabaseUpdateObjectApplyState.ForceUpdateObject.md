# IMetabaseUpdateObjectApplyState.ForceUpdateObject

IMetabaseUpdateObjectApplyState.ForceUpdateObject
-


# IMetabaseUpdateObjectApplyState.ForceUpdateObject


## Синтаксис


ForceUpdateObject: [IMetabaseObject](../IMetabaseObject/IMetabaseObject.htm);


## Описание


Свойство ForceUpdateObject определяет объект репозитория, к которому будет применено обновление вне зависимости от настроек, установленных для объекта в самом обновлении.


## Комментарии


При выполнении [подготовки к выполнению](../IMetabaseUpdateNode/IMetabaseUpdateNode.Prepare.htm) обновления для объектов будет выставлено свойство [ApplyState](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.ApplyState.htm). В частности в свойстве [UpdateObject](IMetabaseUpdateObjectApplyState.UpdateObject.htm) будет доступен объект репозитория, к которому будет применяться обновление, если объект существует в репозитории. Поиск данного объекта будет производиться в соответствии с настройками, указанными в обновлении. В пользовательском событии [OnBeforeApplyUpdate](../IMetabaseUpdateUserEvents/IMetabaseUpdateUserEvents.OnBeforeApplyUpdate.htm), используемом в модуле обновления, через свойство [UpdateObject](IMetabaseUpdateObjectApplyState.UpdateObject.htm) можно изменить обновляемый объект. Если использование модуля обновления не предусмотрено, то используя данное свойство можно указать объект репозитория, к которому необходимо применить обновление.


Примечание. В качестве обновляемого объекта должен быть указан объект того же класса, какой имеет объект в обновлении.


## Пример


Для выполнения примера предполагается наличие в репозитории формы с идентификатором «Temp_Form». В корневом каталоге диска С имеется файл обновления «MainForm.Pef». В состав обновления включена какая-либо форма.


			Sub UserProc;

Var

    MB: IMetabase;

    Update: IMetabaseUpdate;

    AplyState: IMetabaseUpdateObjectApplyState;

Begin

    MB := MetabaseClass.Active;

    Update := Mb.CreateUpdate;

    Update.LoadFromFile("C:\Form.pef");

    AplyState := (Update.RootFolder.Item(0) As IMetabaseUpdateObjectNode).ApplyState;

    AplyState.ForceUpdateObject := MB.ItemById("Temp_Form").Bind;

    Update.Apply;

End Sub UserProc;


При выполнения примера будет осуществлена загрузка обновления из указанного файла. Перед применением будут изменены настройки обновления. Для формы в обновлении будет указана форма репозитория, которую необходимо обновить.


См. также:


[IMetabaseUpdateObjectApplyState](IMetabaseUpdateObjectApplyState.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
