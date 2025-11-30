# ICubeCacheSaver.SaveCube

ICubeCacheSaver.SaveCube
-


# ICubeCacheSaver.SaveCube


## Синтаксис


SaveCube(Cube: [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm));


## Параметры


Cube. Куб, кеш которого необходимо
 сохранить.


## Описание


Метод SaveCube выполняет сохранение
 кеша для заданного [варианта
 отображения](../ICubeModelDestination/ICubeModelDestination.htm) куба с параметрами по умолчанию.


## Пример


Для выполнения примера понадобится куб с идентификатором D_SEP, а также
 база данных с идентификатором DB. Для куба должна быть установлена возможность
 кешировать данные.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    CacheSaver: ICubeCacheSaver;

	    CrInfo: IMetabaseObjectCreateInfo;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("D_SEP");

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_CUBE_CACHE_SAVER;

	    CrInfo.Parent := MObj;

	    CrInfo.Permanent := True;

	    CacheSaver := MB.CreateObject(CrInfo).Edit As ICubeCacheSaver;

	    CacheSaver.Database := MB.ItemById("DB").Bind As IDatabase;

	    (CacheSaver As IMetabaseObject).Save;

	    CacheSaver.SaveCube(MObj.Bind);

	End Sub UserProc;


После выполнения примера данные куба будут закешированы с параметрами
 по умолчанию.


См. также:


[ICubeCacheSaver](ICubeCacheSaver.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
