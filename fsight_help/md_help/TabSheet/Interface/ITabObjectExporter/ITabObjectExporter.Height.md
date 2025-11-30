# ITabObjectExporter.Height

ITabObjectExporter.Height
-


# ITabObjectExporter.Height


## Синтаксис


Height: Integer;


## Описание


Свойство Height определяет высоту,
 которую будет иметь экспортированное изображение объекта.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Exp: ITabObjectExporter;

	    Obj: ITabObject;

	Begin

	    MB := MetabaseClass.Active;

	    Rep := MB.ItemById("Reg_rep").Bind As IPrxReport;

	    Obj := Rep.ActiveSheet.Table.Objects.Item(0);

	    Exp := New TabObjectExporter.Create;

	    Exp.Object := Obj;

	    Exp.Height := 100;

	    Exp.Width := 100;

	    Exp.ExportToFile("c:\Object_1.bmp", "BMP");

	End Sub UserProc;


После выполнения примера первый объект активного листа регламентного
 отчета будет экспортирован в файл "Object_1.bmp". Размеры получившегося
 изображения - 100*100 пикселей.


См. также:


[ITabObjectExporter](ITabObjectExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
