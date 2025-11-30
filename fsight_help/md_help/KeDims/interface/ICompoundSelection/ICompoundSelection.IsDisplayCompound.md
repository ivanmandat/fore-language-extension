# ICompoundSelection.IsDisplayCompound

ICompoundSelection.IsDisplayCompound
-


# ICompoundSelection.IsDisplayCompound


## Синтаксис


IsDisplayCompound: Boolean;


## Описание


Свойство IsDisplayCompound определяет,
 будут ли отображаться частные измерения в виде составного справочника.


## Комментарии


Допустимые значения:


	- True. Частные измерения
	 отображаются в виде составного справочника;


	- False. Частные измерения
	 не отображаются в виде составного справочника.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 CheckBox с наименованием«CheckBox1», компонент ErAnalyzerDimPanel с наименованием«ErAnalyzerDimPanel1»
 и компонент UiErAnalyzer с наименованием«UiErAnalyzer1», являющийся источником
 данных для компонента «ErAnalyzerDimPanel1». В качестве источника данных
 для компонента «UiErAnalyzer1» укажите экспресс-отчет, созданный по нескольким
 источникам.


Компонент «CheckBox1» аналогичен флажку «В
 виде составного изменения», отображаемому на вкладке «Частные
 измерения» панели «Отметка»
 экспресс-отчета.


Пример является обработчиком событий: OnCreate для формы и OnChange
 для компонента «CheckBox1».


Добавьте ссылки на системные сборки «Metabase», «Dimensions», «Cubes»,
 «Pivot».


			Class TESTForm: Form

    UiErAnalyzer1: UiErAnalyzer;

    CheckBox1: CheckBox;

    Analyzer: IEaxAnalyzer;

    CompoundSel: ICompoundSelection;


    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

    Var

        Pivot: IPivot;

        VirtualCube: IVirtualCube;

        CompoundDimKey: Integer;

    Begin

        Analyzer := UiErAnalyzer1.ErAnalyzer;

        Pivot := Analyzer.Pivot;

        VirtualCube := (Pivot.DataSource As ICubeInstanceDestination).Cube.Cube As IVirtualCube;

        CompoundDimKey := (VirtualCube.FactDimension As IMetabaseObjectDescriptor).Key;

        CompoundSel := Pivot.Selection.FindByKey(CompoundDimKey) As ICompoundSelection;

        CheckBox1.Checked := CompoundSel.IsDisplayCompound;

    End Sub TESTFormOnCreate;


    Sub CheckBox1OnChange(Sender: Object; Args: IEventArgs);

    Var

        Pivot: IPivot;

        VirtualCube: IVirtualCube;

        CompoundDimKey: Integer;

    Begin

        CompoundSel.IsDisplayCompound := CheckBox1.Checked;

        Self.Text := CompoundSel.IsDisplayCompound.ToString;

        Analyzer.DataSources.Refresh(False);

        Pivot := Analyzer.Pivot;

        VirtualCube := (Pivot.DataSource As ICubeInstanceDestination).Cube.Cube As IVirtualCube;

        CompoundDimKey := (VirtualCube.FactDimension As IMetabaseObjectDescriptor).Key;

        CompoundSel := Pivot.Selection.FindByKey(CompoundDimKey) As ICompoundSelection;

    End Sub CheckBox1OnChange;

End Class TESTForm;


В результате выполнения примера при установке флажка частные измерения
 будут отображены в виде составного справочника, состоящего из элементов
 частных измерений источников данных. В этом случае в названии формы будет
 отображено значение «True».


См. также:


[ICompoundSelection](ICompoundSelection.htm)
 | [Работа
 с частными измерениями](UiSelection.chm::/Selection/Working_with_private_dimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
