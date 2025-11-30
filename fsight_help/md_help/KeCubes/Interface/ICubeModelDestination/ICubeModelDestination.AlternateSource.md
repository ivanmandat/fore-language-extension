# ICubeModelDestination.AlternateSource

ICubeModelDestination.AlternateSource
-


# ICubeModelDestination.AlternateSource


## Синтаксис


AlternateSource: [ICubeModelAlternateSource](../ICubeModelAlternateSource/ICubeModelAlternateSource.htm);


## Описание


Свойство AlternateSource возвращает
 параметры альтернативного куба, используемого для хранения данных. Свойство
 актуально при работе с вычисляемыми кубами.


## Пример


Для выполнения примера предполагается наличие вычисляемого куба с идентификатором
 CALC_CUBE и куба, с идентификатором Source_1, который будет использоваться
 в качестве альтернативного источника данных.


			Sub UserProc;

Var

    MB: IMetabase;

    Cube, Source: ICubeModel;

    AltSource: ICubeModelAlternateSource;

Begin

    MB := MetabaseClass.Active;

    Cube := Mb.ItemById("CALC_CUBE").Edit As ICubeModel;

    Source := Mb.ItemById("Source_1").Bind As ICubeModel;

    AltSource := Cube.Destinations.DefaultDestination.AlternateSource;

    AltSource.Source := Source.Destinations.DefaultDestination;

    AltSource.UseStorage := True;

    AltSource.AutoSaveToStorage := True;

    AltSource.UseExecute := True;

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для вычисляемого куба в качестве альтернативного
 куба будет установлен куб Source_1. Все данные будут автоматически сохраняться
 в альтернативный куб, и браться оттуда перед вычислением.


См. также:


[ICubeModelDestination](ICubeModelDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
