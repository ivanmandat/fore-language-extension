# IMsModelSpace.UserMethodTemplates

IMsModelSpace.UserMethodTemplates
-


# IMsModelSpace.UserMethodTemplates


## Синтаксис


UserMethodTemplates: [IMsUserMethodTemplates](../IMsUserMethodTemplates/IMsUserMethodTemplates.htm);


## Описание


Свойство UserMethodTemplates
 возвращает коллекцию шаблонов пользовательских методов, используемых в
 контейнере моделирования.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором BD, а так же модуля User_Method, содержащего шаблон
 пользовательского метода.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Kont: IMsModelSpace;

    Templates: IMsUserMethodTemplates;

    Template: IMsUserMethodTemplate;

    TemplateParams: IMsUserMethodTemplateParams;

    TemplateParam: IMsUserMethodTemplateParam;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MODELSPACE;

    CrInfo.Id := "Kont_Model";

    CrInfo.Name := "Новый контейнер моделирования";

    CrInfo.Parent := MB.Root;

    MObj := MB.CreateObject(CrInfo).Edit;

    Kont := MObj As IMsModelSpace;

    //Установка БД

    Kont.Database := MB.ItemById("BD").Bind As IDatabase;

    //Установка периода

    Kont.StartDate := DateTime.ComposeDay(2000, 1, 1);

    Kont.EndDate := DateTime.AddYears(Kont.StartDate, 10);

    //Шаблон пользовательского метода

    Templates := Kont.UserMethodTemplates;

    Template := Templates.Add;

    Template.Assembly := MB.ItemById("User_Method");

    Template.ClassName := "My_Method";

    //Параметры шаблона

    TemplateParams := Template.Params;

    TemplateParam := TemplateParams.Add;

    TemplateParam.Binding := """UI=""FloatEdit""";

    TemplateParam.Name := "Первый параметр";

    TemplateParam := TemplateParams.Add;

    TemplateParam.Binding := """UI=""FloatEdit""";

    TemplateParam.Name := "Второй параметр";

    MObj.Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 контейнер моделирования. Календарный период для данного контейнера будет
 установлен - 10 лет, в список шаблонов пользовательских методов будет
 создан один шаблон.


См. также:


[IMsModelSpace](IMsModelSpace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
