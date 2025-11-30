# IEtlPlainDataFixedUser.Template

IEtlPlainDataFixedUser.Template
-


# IEtlPlainDataFixedUser.Template


## Синтаксис


Template: [IEtlTemplate](KeFore.chm::/Interface/IEtlTemplate/IEtlTemplate.htm);


## Описание


Свойство Template определяет
 шаблон для алгоритма пользователя.


## Комментарии


Шаблон используется для задания внешнего вида алгоритма пользователя
 на рабочем поле.


## Пример


Для выполнения примера в репозитории необходимо наличие:


	- модуля с идентификатором USERSCLASSFORETL, содержащего класс
	 «User» для реализации необходимых интерфейсов;


	- задачи ETL с идентификатором ETL_TASK.


Добавьте ссылки на системные сборки: Andy, Drawing, Etl, Fore, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Etl, ETLEdit: IEtlPlainDataFixedUser;

	    Params: ISharedParams;

	    Templates: IEtlTemplates;

	    Template: IEtlTemplate;

	    Inputs: IEtlPlainInputs;

	    Outputs: IEtlPlainOutputs;

	    Rect: IWxRectangle;

	    WxETL: IWxEtlObject;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим задачу ETL

	    EtlTask := MB.ItemById("ETL_TASK").Edit As IEtlTask;

	    // Создадим пользовательский преобразователь в задаче

	    Etl := EtlTask.Create(EtlObjectType.PlainDataFixedUser) As IEtlPlainDataFixedUser;

	    Etl.Id := "PlainDataFixedUser";

	    Etl.Name := "Алгоритм пользователя";

	    // Будем использовать шаблон

	    Params := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

	    Templates := Params.EtlTemplates(ETLTemplateType.Provider);

	    Template := Templates.Add;

	    Template.Module := mb.ItemById("USERSCLASSFORETL");

	    Template.Class_ := "User";

	    Template.Id := "TemplID";

	    Template.Name := "TemplName";

	    Etl.Template := Template;

	    (Params As IMetabaseObject).Save;

	    // Добавим вход, выход, шаблон преобразователя

	    ETLEdit := ETl.Edit;

	    Inputs := ETLEdit.PlainInputs;

	    Inputs.Add;

	    Outputs := ETLEdit.PlainOutputs;

	    Outputs.Add;

	    // Сохраним изменения преобразователя

	    ETLEdit.Save;

	    // Создадим визуальное представление преобразователя

	    Rect := EtlTask.Workspace.CreateRectangle;

	    WxETL := New WxEtlObject.Create;

	    WxETL.EtlObject := Etl;

	    Rect.Style.TextPosition := WxTextPosition.Bottom;

	    Rect.Style.PictureMarginTop := -10;

	    Rect.PinPosition := New GxPointF.Create(50, 50);

	    Rect.Extension := WxETL As IWxShapeExtension;

	    // Сохраним изменения

	    (EtlTask As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в указанной задаче ETL будет создан преобразователь
 данных на основе шаблона.


См. также:


[IEtlPlainDataFixedUser](IEtlPlainDataFixedUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
