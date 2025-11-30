# IEtlPlainDataFixedUserProvider.Template

IEtlPlainDataFixedUserProvider.Template
-


# IEtlPlainDataFixedUserProvider.Template


## Синтаксис


Template: [IEtlTemplate](KeFore.chm::/Interface/IEtlTemplate/IEtlTemplate.htm);


## Описание


Свойство Template определяет
 шаблон для источника пользователя.


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

	    MObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    FixedUserProvider: IEtlPlainDataFixedUserProvider;

	    FixedUserConsumer: IEtlPlainDataFixedUserConsumer;

	    Paramss: ISharedParams;

	    Templates: IEtlTemplates;

	    Template: IEtlTemplate;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим задачу ETL

	    MObj := MB.ItemById("ETL_TASK").Edit;

	    EtlTask := MObj As IEtlTask;

	    //Создадим объект "Источник пользователя"

	    FixedUserProvider := EtlTask.Create(EtlObjectType.PlainDataFixedUserProvider) As IEtlPlainDataFixedUserProvider;

	    // Будем использовать шаблон

	    Paramss := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

	    Templates := Paramss.EtlTemplates(ETLTemplateType.Provider);

	    Template := Templates.Add;

	    Template.Module := mb.ItemById("USERSCLASSFORETL");

	    Template.Class_ := "User";

	    Template.Id := "TemplateProv";

	    Template.Name := "TemplNameP";

	    FixedUserProvider.Template := Template;

	    (Paramss As IMetabaseObject).Save;

	    // Установим режим для источника

	    FixedUserProvider.ExMode := True;

	    // Зададим наименование источника

	    FixedUserProvider.Name := "Источник пользователя";

	    // Визуальное представление источника в задаче

	    CreateWXP(FixedUserProvider, EtlTask);

	    //Создадим объект "Приёмник пользователя"

	    FixedUserConsumer := EtlTask.Create(EtlObjectType.PlainDataFixedUserConsumer) As IEtlPlainDataFixedUserConsumer;

	    // Будем использовать шаблон

	    Paramss := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

	    Templates := Paramss.EtlTemplates(ETLTemplateType.Consumer);

	    Template := Templates.Add;

	    Template.Module := mb.ItemById("USERSCLASSFORETL");

	    Template.Class_ := "User";

	    Template.Id := "TemplateCons";

	    Template.Name := "TemplNameC";

	    FixedUserProvider.Template := Template;

	    (Paramss As IMetabaseObject).Save;

	    // Установим монопольный режим для приёмника

	    FixedUserConsumer.ExMode := True;

	    // Зададим наименование приёмника

	    FixedUserConsumer.Name := "Приёмник пользователя";

	    // Визуальное представление приёмника в задаче

	    CreateWXC(FixedUserConsumer, EtlTask);

	    // Сохраним изменения

	    Mobj.Save;

	End Sub UserProc;


	// Создание визуального объекта источника данных

	Sub CreateWXP(CopyObj: IEtlPlainDataProvider; Etltask: IEtltask);

	Var

	    WxDataTrans: IWxRectangle;

	    WxETLDataTrans: IWxEtlObject;

	Begin

	    WxDataTrans := EtlTask.Workspace.CreateRectangle;

	    WxDataTrans.Id := CopyObj.Id;

	    WxETLDataTrans := New WxEtlObject.Create;

	    WxETLDataTrans.EtlObject := CopyObj;

	    WxDataTrans.Style.TextPosition := WxTextPosition.Bottom;

	    WxDataTrans.Style.PictureMarginTop := -10;

	    WxDataTrans.PinPosition := New GxPointF.Create(20, 20);

	    WxDataTrans.Extension := WxETLDataTrans As IWxShapeExtension;

	End Sub CreateWXP;


	// Создание визуального объекта приёмника данных

	Sub CreateWXC(CopyObj: IEtlPlainDataConsumer; Etltask: IEtltask);

	Var

	    WxDataTrans: IWxRectangle;

	    WxETLDataTrans: IWxEtlObject;

	Begin

	    WxDataTrans := EtlTask.Workspace.CreateRectangle;

	    WxDataTrans.Id := CopyObj.Id;

	    WxETLDataTrans := New WxEtlObject.Create;

	    WxETLDataTrans.EtlObject := CopyObj;

	    WxDataTrans.Style.TextPosition := WxTextPosition.Bottom;

	    WxDataTrans.Style.PictureMarginTop := -10;

	    WxDataTrans.PinPosition := New GxPointF.Create(40, 40);

	    WxDataTrans.Extension := WxETLDataTrans As IWxShapeExtension;

	End Sub CreateWXC;


После выполнения примера будет созданы источник и приёмник данных на
 основе шаблона.


См. также:


[IEtlPlainDataFixedUserProvider](IEtlPlainDataFixedUserProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
