# IModule.Assembly

IModule.Assembly
-


# IModule.Assembly


## Синтаксис


Assembly: [IAssembly](../IAssembly/IAssembly.htm);


## Описание


Свойство Assembly возвращает
 параметры временной сборки, соответствующей данному объекту.


## Комментарии


Данное свойство возвращает параметры сборки в рамках которой осуществляется
 компиляция отдельных модулей/форм репозитория. Если модуль/форма включены
 в какую-либо сборку репозитория, то для получения параметров этой сборки
 необходимо использовать свойство [ParentAssembly](IModule.ParentAssembly.htm).


## Пример №1


Для выполнения примера предполагается наличие в репозитории сборки с
 идентификатором "Assembly_1".


	Sub Main;

	Var

	    MB: IMetabase;

	    Assembly: IMetabaseObjectDescriptor;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Modul: IModule;

	Begin

	    MB := MetabaseClass.Active;

	    Assembly := MB.ItemById("Assembly_1");

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_MODULE;

	    CrInfo.Id := "NewModule";

	    CrInfo.Name := "Новый модуль";

	    CrInfo.Parent := Assembly;

	    Modul := MB.CreateObject(CrInfo).Edit As IModule;

	    Modul.Text :=

	        "Sub Main;" + #13 + #10 +

	        "Begin" + #13 + #10 +

	        "End Sub Main;";

	    If Modul.Modified Then

	        (Modul As IMetabaseObject).Save;

	    End If;

	End Sub Main;


После выполнения примера рамках сборки "Assembly_1" будет
 создан новый модуль. В тексте модуля будет содержаться шаблон для процедуры
 "Main".


## Пример №2


	Sub Main;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Modul: IModule;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_MODULE;

	    CrInfo.Id := "NewModule";

	    CrInfo.Name := "Новый модуль";

	    CrInfo.Parent := MB.Root;

	    Modul := MB.CreateObject(CrInfo).Edit As IModule;

	    Modul.Assembly.References := "Metabase;Db";

	    Modul.Text :=

	        "Sub Main;" + #13 + #10 +

	        "Begin" + #13 + #10 +

	        "End Sub Main;";

	    If Modul.Modified Then

	        (Modul As IMetabaseObject).Save;

	    End If;

	End Sub Main;


После выполнения примера в корневом каталоге репозитория будет создан
 новый модуль. Данный модуль будет реализовывать временную сборку. Для
 него будут подключены системные сборки "Metabase" и "Db".
 В тексте модуля будет содержаться шаблон для процедуры "Main".


См. также:


[IModule](IModule.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
