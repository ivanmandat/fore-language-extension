# ITabHyperlink.Target

ITabHyperlink.Target
-


# ITabHyperlink.Target


## Синтаксис


Target: [TabHyperlinkTarget](../../Enums/TabHyperlinkTarget.htm);


## Описание


Свойство Target определяет способ
 загрузки страницы при переходе по ссылке.


## Комментарии


Значение данного свойства не учитывается при настройке [расшифровки](UiAnalyticalArea.chm::/Hyperlinks/Working_with_hyperlinks.htm)
 в отчётах, экспресс-отчётах, аналитических панелях и [формах ввода](DataEntryForms.chm::/desktop/Table/Detail_dimensions.htm).


В [конструкторе
 бизнес-приложений](Constructor.chm::/Intro/Designer_business_applications.htm) для открытия объекта по гиперссылке,
 настроенной с помощью Fore-модуля, в [отчётах](UIReport.chm::/UiReport_purpose.htm),
 [экспресс-отчётах](UIExpress.chm::/purpose/UiExpress_Purpose.htm),
 [аналитических
 панелях](UIAdhoc.chm::/UiAdhoc_Purpose.htm),
 [формах
 ввода](DataEntryForms.chm::/DataEntryForms_Purpose.htm) доступны значения [blank](../../Enums/TabHyperlinkTarget.htm)
 и [parent](../../Enums/TabHyperlinkTarget.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REGULAR_REPORT.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Rep: IPrxReport;

    Tab: ITabSheet;

    Range: ITabRange;

    Hyperlink: ITabHyperlink;

Begin

    MB:= MetabaseClass.Active;

    MObj:= MB.ItemById("REGULAR_REPORT").Edit;

    Rep:= MObj As IPrxReport;

    Tab:= (Rep.ActiveSheet As IprxTable).TabSheet;

    Range:= Tab.Cell(0, 0);

    Hyperlink:= Range.Style.Hyperlink;

    Hyperlink.Action:= "http://www.example.com";

    Hyperlink.ActionType:= TabHyperlinkActionType.OpenURL;

    Hyperlink.Enable:= TriState.OnOption;

    Hyperlink.Target:= TabHyperlinkTarget.Blank;

    Hyperlink.SeparateLinkText:= TriState.OnOption;

    Hyperlink.Text:= "Сайт компании";

    MObj.Save;

End Sub UserProc;


При выполнении примера в указанной ячейке активного листа будет создана
 гиперссылка. При переходе по гиперссылке в новом окне браузера будет открываться
 указанный сайт.


См. также:


[ITabHyperlink](ITabHyperlink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
