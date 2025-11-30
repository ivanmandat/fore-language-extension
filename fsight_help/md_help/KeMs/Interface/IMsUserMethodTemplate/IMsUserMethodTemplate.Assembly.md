# IMsUserMethodTemplate.Assembly

IMsUserMethodTemplate.Assembly
-


# IMsUserMethodTemplate.Assembly


## Синтаксис


Assembly: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Assembly определяет
 модуль среды разработки, содержащий пользовательский класс, реализующий
 метод расчета модели.


## Комментарии


Модуль, подключаемый в шаблоне, должен содержать класс унаследованный
 от [IMsUserTransformImplementation](../IMsUserTransformImplementation/IMsUserTransformImplementation.htm)
 и имеющий полную реализацию методов данного интерфейса.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором BD, а так же модуля USER_METHOD, содержащего шаблон
 пользовательского метода.


Добавьте ссылки на системные сборки: Dal, Metabase, Ms.


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

    CrInfo.Id := "KONT_MODEL";

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

    Template.Assembly := MB.ItemById("USER_METHOD");

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
 создан один шаблон. Для шаблона будут созданы два параметра.


См. также:


[IMsUserMethodTemplate](IMsUserMethodTemplate.htm)|[IMsUserTransformImplementation](../IMsUserTransformImplementation/IMsUserTransformImplementation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
