# GetTreeMap: Операция

GetTreeMap: Операция
-


**


# GetTreeMap


## Синтаксис


GetTreeMapResult GetTreeMap(TreeMapId tTreeMap,
 GetTreeMapArg tArg)


## Параметры


tTreeMap. Моникёр пузырькового
 дерева;


tArg. Параметры извлечения
 настроек плоского дерева.


## Описание


Операция GetTreeMap извлекает
 настройки плоского дерева.


## Комментарии


Для выполнения операции укажите в поле tTreeMap
 моникёр плоского дерева, а в поле tArg
 параметры, в соответствии с которыми будут извлекаться настройки. Моникёр
 может быть сформирован на базе моникёра экспресс-отчета по следующему
 правилу: «Моникёр открытого экземпляра
 экспресс-отчета»!TreeMap.


## Пример


Ниже приведен пример использования операции GetTreeMap
 для получения настроек плоского дерева. В запросе передается моникёр плоского
 дерева, в ответе приходят запрошенные настройки.


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetTreeMap xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTreeMap xmlns="****">
  <id>S1!M!S!E2!TreeMap</id>  </tTreeMap>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <all>true</all>  </pattern>
  </tArg>
  </GetTreeMap>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetTreeMapResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!E2!TreeMap</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<md>
[![](../../minus.gif)](../../#)<TreeMap MinFont="**8.00000**" MaxFont="**128.00000**" HeatMap="**false**" PS="**-1**" RenderMode="**Mode2D**" AnimationDuration="**1500.00000**" ShowBranches="**true**" CaptionHeight="**22.00000**" UseSelectOnRightClick="**true**" View3D="**false**" BranchSpacing="**2.00000**" HierarchyDepth="**3**" LeafBorderWidth="**1.00000**" LabelAutoColor="**true**">
[![](../../minus.gif)](../../#)<StartHeaderStyle NoDataText="****" TextWrapping="**Ellipsis**" Margin="**0.00000 0.00000 0.00000 0.00000**" Padding="**0.00000 0.00000 0.00000 0.00000**" Alignment="**Center**">
[![](../../minus.gif)](../../#)<Style>
[![](../../minus.gif)](../../#)<Release>
[![](../../minus.gif)](../../#)<Font Size="**12.00000**" IsBold="**false**" Color="**#FF5E5E5B**" FontFamily="**Tahoma**" IsItalic="**false**" IsUnderline="**false**">
  <Shadow EnableBlur="**false**" Color="**#FFFFFFFF**" BlurSize="**0.00000**" />
  </Font>
[![](../../minus.gif)](../../#)<Background Angle="**1.57080**" Opacity="**1.00000**" PPType="**PP.LinearGradientBrush**">
[![](../../minus.gif)](../../#)<GradientStops>
  <GradientStop Color="**#FFC8C8C8**" Offset="**0.00000**" />
  <GradientStop Color="**#A4A4A4**" Offset="**1.00000**" />
  </GradientStops>
  </Background>
  <Border Color="**#FF9F9F9F**" Width="**1.00000**" Radius="**0.00000**" Style="**solid**" />
  </Release>
  </Style>
  <MaskText IsAuto="**true**" />
  <NoDataText IsAuto="**true**" />
  </StartHeaderStyle>
[![](../../minus.gif)](../../#)<EndHeaderStyle NoDataText="****" TextWrapping="**Ellipsis**" Margin="**0.00000 0.00000 0.00000 0.00000**" Padding="**0.00000 0.00000 0.00000 0.00000**" Alignment="**Center**">
[![](../../minus.gif)](../../#)<Style>
[![](../../minus.gif)](../../#)<Release>
[![](../../minus.gif)](../../#)<Font Size="**12.00000**" IsBold="**false**" Color="**#FFB9B9B9**" FontFamily="**Tahoma**" IsItalic="**false**" IsUnderline="**false**">
  <Shadow EnableBlur="**false**" Color="**#FFFFFFFF**" BlurSize="**0.00000**" />
  </Font>
[![](../../minus.gif)](../../#)<Background Angle="**1.57080**" Opacity="**1.00000**" PPType="**PP.LinearGradientBrush**">
[![](../../minus.gif)](../../#)<GradientStops>
  <GradientStop Color="**#FFF4F4F4**" Offset="**0.00000**" />
  <GradientStop Color="**#E9E9E9**" Offset="**1.00000**" />
  </GradientStops>
  </Background>
  <Border Color="**#FFC1C1C1**" Width="**1.00000**" Radius="**0.00000**" Style="**solid**" />
  </Release>
  </Style>
  <MaskText IsAuto="**true**" />
  <NoDataText IsAuto="**true**" />
  </EndHeaderStyle>
[![](../../minus.gif)](../../#)<LabelsStyle NoDataText="****" TextWrapping="**Hidden**" Margin="**0.00000 0.00000 0.00000 0.00000**" Padding="**6.00000 0.00000 6.00000 0.00000**" Alignment="**Center**">
[![](../../minus.gif)](../../#)<Style>
[![](../../minus.gif)](../../#)<Release>
  <Font Size="**12.00000**" IsBold="**false**" Color="**#FF000000**" FontFamily="**Tahoma**" IsItalic="**false**" IsUnderline="**false**" />
  </Release>
  </Style>
  <MaskText IsAuto="**false**" Value="**{%Name}**" />
  <NoDataText IsAuto="**true**" />
  </LabelsStyle>
[![](../../minus.gif)](../../#)<ItemsTooltipStyle NoDataText="****" TextWrapping="**NoWrap**" Margin="**0.00000 0.00000 0.00000 0.00000**" Padding="**6.00000 6.00000 6.00000 6.00000**" Alignment="**Left**" HoverMode="**MouseOver**">
[![](../../minus.gif)](../../#)<Style>
[![](../../minus.gif)](../../#)<Release>
  <Font Size="**13.00000**" IsBold="**false**" Color="**#FF918F8D**" FontFamily="**Tahoma**" IsItalic="**false**" IsUnderline="**false**" />
  <Background Color="**#FFFFFF**" Opacity="**1.00000**" PPType="**PP.SolidColorBrush**" />
  <Border Color="**#FFC1C1C1**" Width="**1.00000**" Radius="**0.00000**" Style="**solid**" />
  </Release>
  </Style>
  <MaskText IsAuto="**true**" />
  <NoDataText IsAuto="**true**" />
  </ItemsTooltipStyle>
[![](../../minus.gif)](../../#)<BranchItemsTooltipStyle NoDataText="****" TextWrapping="**NoWrap**" Margin="**0.00000 0.00000 0.00000 0.00000**" Padding="**6.00000 6.00000 6.00000 6.00000**" Alignment="**Left**" HoverMode="**MouseOver**">
[![](../../minus.gif)](../../#)<Style>
[![](../../minus.gif)](../../#)<Release>
  <Font Size="**13.00000**" IsBold="**false**" Color="**#FF918F8D**" FontFamily="**Tahoma**" IsItalic="**false**" IsUnderline="**false**" />
  <Background Color="**#FFFFFF**" Opacity="**1.00000**" PPType="**PP.SolidColorBrush**" />
  <Border Color="**#FFC1C1C1**" Width="**1.00000**" Radius="**0.00000**" Style="**solid**" />
  </Release>
  </Style>
  <MaskText IsAuto="**true**" />
  <NoDataText IsAuto="**true**" />
  </BranchItemsTooltipStyle>
[![](../../minus.gif)](../../#)<Breadcrumb Margin="**0.00000 0.00000 0.00000 0.00000**" Padding="**1.00000 1.00000 1.00000 1.00000**" VerticalAlignment="**Top**" HorizontalAlignment="**Center**" IsVisible="**true**">
[![](../../minus.gif)](../../#)<Style>
[![](../../minus.gif)](../../#)<Release>
  <Font IsNull="**true**" />
  <Background Color="**#9C9C9C**" Opacity="**1.00000**" PPType="**PP.SolidColorBrush**" />
  </Release>
  </Style>
[![](../../minus.gif)](../../#)<ItemStyle NoDataText="****" TextWrapping="**NoWrap**" Margin="**0.00000 0.00000 0.00000 0.00000**" Padding="**6.00000 0.00000 6.00000 0.00000**" Alignment="**Left**">
[![](../../minus.gif)](../../#)<Style>
[![](../../minus.gif)](../../#)<Release>
  <Font Size="**12.00000**" IsBold="**false**" Color="**#FFFFFFFF**" FontFamily="**Tahoma**" IsItalic="**false**" IsUnderline="**false**" />
  <Background Color="**#9C9C9C**" Opacity="**1.00000**" PPType="**PP.SolidColorBrush**" />
  <Border Color="**#FFBABABA**" Width="**1.00000**" Radius="**0.00000**" Style="**solid**" />
  </Release>
[![](../../minus.gif)](../../#)<Hover>
[![](../../minus.gif)](../../#)<Background Angle="**1.57080**" Opacity="**1.00000**" PPType="**PP.LinearGradientBrush**">
[![](../../minus.gif)](../../#)<GradientStops>
  <GradientStop Color="**#FF898989**" Offset="**0.00000**" />
  <GradientStop Color="**#959595**" Offset="**1.00000**" />
  </GradientStops>
  </Background>
  </Hover>
[![](../../minus.gif)](../../#)<Pressed>
[![](../../minus.gif)](../../#)<Background Angle="**1.57080**" Opacity="**1.00000**" PPType="**PP.LinearGradientBrush**">
[![](../../minus.gif)](../../#)<GradientStops>
  <GradientStop Color="**#FF6C6C6C**" Offset="**0.00000**" />
  <GradientStop Color="**#878787**" Offset="**1.00000**" />
  </GradientStops>
  </Background>
  </Pressed>
  </Style>
  <MaskText IsAuto="**true**" />
  <NoDataText IsAuto="**true**" />
  </ItemStyle>
  </Breadcrumb>
[![](../../minus.gif)](../../#)<ColorVisual>
  <ColorMapping DataSource="**DataSource1**" DimAttributeId="**DefaultID**" Id="**DSMapping59**" Type="**Scale**" Scale="**Scale52**" Index="**0**" Format="**#,##0.00**" />
  </ColorVisual>
[![](../../minus.gif)](../../#)<SizeVisual>
  <NumericMapping DataSource="**DataSource1**" DimAttributeId="**DefaultID**" Id="**DSMapping3**" DataTransformer="**DataTransformer1**" Type="**Transformer**" Index="**0**" Format="****" />
  </SizeVisual>
[![](../../minus.gif)](../../#)<HeightVisual>
  <NumericMapping DimAttributeId="**DefaultID**" DataSource="**DataSource1**" Id="**DSMapping4**" Index="**0**" Format="****" Type="**None**" />
  </HeightVisual>
[![](../../minus.gif)](../../#)<TextVisual>
  <TextMapping DimAttributeId="**DefaultID**" DataSource="**DataSource1**" Id="**DSMapping6**" Index="**0**" Format="****" Type="**None**" />
  </TextVisual>
  <StyleContainer SCK="**4294967295**" SCT="**0**" />
[![](../../minus.gif)](../../#)<Timeline Inverse="**false**" ReturnToInitialState="**true**" Margin="**10.00000 13.00000 6.00000 8.00000**" CurrentStep="**0**" StepDuration="**1000.00000**" IsOverlap="**false**" DelayDuration="**1000.00000**" Padding="**0.00000 0.00000 0.00000 0.00000**" HorizontalAlignment="**Center**" VerticalAlignment="**Bottom**" IsVisible="**true**" LastIndexAsInitial="**true**">
[![](../../minus.gif)](../../#)<Style>
[![](../../minus.gif)](../../#)<Release>
  <Font Size="**11.00000**" IsBold="**false**" Color="**#FF918F8D**" FontFamily="**Tahoma**" IsItalic="**false**" IsUnderline="**false**" />
  </Release>
  </Style>
  </Timeline>
[![](../../minus.gif)](../../#)<Legends>
[![](../../minus.gif)](../../#)<Legend0 ItemsOrder="**LeftToRight**" NoDataVisible="**true**" Visibility="**IsDependent**" HorizontalAlignment="**Center**" HoverMode="**MouseOver**" Format="**#,##0.00**" TextSpacing="**10.00000**" IsOuter="**false**" DoHighlight="**false**" NoDataPosition="**After**" Id="**Legend0**" TextHorizontalAlignment="**Left**" IncludeEquals="**true**" Margin="**0.00000 0.00000 0.00000 0.00000**" Type="**Intervals**" Marker="**Circle**" AutoColumnsCount="**true**" ColorApplying="**Marker**" CellSpacing="**10.00000 10.00000**" Mode="**LessGreater**" Scale="**Scale52**" IsOverlap="**false**" ColumnCount="**0**" Padding="**6.00000 6.00000 6.00000 6.00000**" VerticalAlignment="**Bottom**" ContentAlignment="**Center**">
[![](../../minus.gif)](../../#)<Style>
[![](../../minus.gif)](../../#)<Release>
  <Font Size="**12.00000**" IsBold="**false**" Color="**#FF918F8D**" FontFamily="**Tahoma**" IsItalic="**false**" IsUnderline="**false**" />
  </Release>
  </Style>
  <EqualFormat IsAuto="**true**" />
  <GreaterFormat IsAuto="**true**" />
  <LessFormat IsAuto="**true**" />
  <BetweenFormat IsAuto="**true**" />
  <NoDataText IsAuto="**true**" />
[![](../../minus.gif)](../../#)<Header NoDataText="****" TextWrapping="**NoWrap**" Margin="**0.00000 0.00000 0.00000 0.00000**" Padding="**0.00000 0.00000 0.00000 0.00000**" Alignment="**Center**" IsVisible="**true**">
[![](../../minus.gif)](../../#)<Style>
[![](../../minus.gif)](../../#)<Release>
  <Font Size="**12.00000**" IsBold="**false**" Color="**#FF918F8D**" FontFamily="**Tahoma**" IsItalic="**false**" IsUnderline="**false**" />
  </Release>
  </Style>
  <MaskText IsAuto="**true**" />
  <NoDataText IsAuto="**true**" />
  <Text IsAuto="**false**" Value="**Цвет: **" />
  </Header>
  </Legend0>
  </Legends>
[![](../../minus.gif)](../../#)<Style>
[![](../../minus.gif)](../../#)<Release>
  <Background Color="**#FFFFFF**" Opacity="**1.00000**" PPType="**PP.SolidColorBrush**" />
  </Release>
  </Style>
  <LegendMapping Legend0="**DSMapping59**" />
[![](../../minus.gif)](../../#)<HoverInactiveEffects>
  <Effect Opacity="**0.50000**" PPType="**PP.Ui.OpacityEffect**" />
  </HoverInactiveEffects>
[![](../../minus.gif)](../../#)<SelectInactiveEffects>
  <Effect Opacity="**0.25000**" PPType="**PP.Ui.OpacityEffect**" />
  </SelectInactiveEffects>
  <CustomData />
[![](../../minus.gif)](../../#)<DataSources>
[![](../../minus.gif)](../../#)<DataSource1 Id="**DataSource1**" Title="****">
  <AttributesNames />
[![](../../minus.gif)](../../#)<Series>
  <Serie Id="**1**" />
  <Serie Id="**2**" />
  <Serie Id="**3**" />
  <Serie Id="**4**" />
  </Series>
  </DataSource1>
  </DataSources>
[![](../../minus.gif)](../../#)<Scales>
  <Scale52 AutoCalculable="**true**" MinValue="**91.68919**" Items="**#FFFF462C #FFEBAF36 #FFFFD900 #FFB1CA40 #FF6A8535**" InactiveItem="**#FFFFFFFF**" LogarithmBase="**2.00000**" MaxValue="**158.10008**" Mode="**Uniform**" IsConstant="**false**" RoundBias="**0.00000**" Id="**Scale52**" EnableEquality="**false**" NoData="**#FFEBEBEB**" TypeArguments="**Brush**" />
  </Scales>
[![](../../minus.gif)](../../#)<Transformers>
  <DataTransformer1 UseAbsoluteValues="**false**" Id="**DataTransformer1**" MinResultCut="**0.00000**" PPType="**PP.NormalizationTransformer**" Type="**Linear**" MinResult="**0.00000**" MaxResult="**1.00000**" NoDataResult="**0.00000**" />
  </Transformers>
[![](../../minus.gif)](../../#)<SettingsProvider>
  <ItemsToolTipStyle NoDataText="**нет данных**" ToolTipText="****" />
  <BranchItemsToolTipStyle NoDataText="**нет данных**" ToolTipText="****" />
  <IntervalsLegendStyle BetweenFormat="**от {0} до {1}**" GreaterFormat="**более {0}**" NoDataText="**нет данных**" LessFormat="**менее {0}**" EqualFormat="**равно {0}**" />
  <SizeLegendStyle MaxValueFormat="**{0}**" MinValueFormat="**{0}**" />
  </SettingsProvider>
  </TreeMap>
  </md>
  <style key="**4294967295**" sheetType="**0**" />
[![](../../minus.gif)](../../#)<predefinedStyles>
  <predefinedStyleCount>1</predefinedStyleCount>  </predefinedStyles>
[![](../../minus.gif)](../../#)<predefinedStyle>
  <predefinedStyleIndex>-1</predefinedStyleIndex>  </predefinedStyle>
  </meta>
  </GetTreeMapResult>
  </soapenv:Body>
  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "GetTreeMap" :
  {
   "tTreeMap" :
    {
     "id" : "S1!M!S!E2!TreeMap"
    },
   "tArg" :
    {
     "pattern" :
      {
       "all" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetTreeMapResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!E2!TreeMap"
    },
   "meta" :
    {
     "md" :
      {
       "TreeMap" :
        {
         "@HeatMap" : "false",
         "@View3D" : "false",
         "@PS" : "-1",
         "@BranchSpacing" : "2.00000",
         "@HierarchyDepth" : "3",
         "@RenderMode" : "Mode2D",
         "@AnimationDuration" : "1500.00000",
         "@LeafBorderWidth" : "1.00000",
         "@ShowBranches" : "true",
         "@CaptionHeight" : "22.00000",
         "@LabelAutoColor" : "true",
         "@MinFont" : "8.00000",
         "@MaxFont" : "128.00000",
         "@UseSelectOnRightClick" : "true",
         "StartHeaderStyle" :
          {
           "@Padding" : "0.00000 0.00000 0.00000 0.00000",
           "@NoDataText" : "",
           "@TextWrapping" : "Ellipsis",
           "@Margin" : "0.00000 0.00000 0.00000 0.00000",
           "@Alignment" : "Center",
           "Style" :
            {
             "Release" :
              {
               "Font" :
                {
                 "@IsItalic" : "false",
                 "@IsUnderline" : "false",
                 "@FontFamily" : "Tahoma",
                 "@Size" : "12.00000",
                 "@IsBold" : "false",
                 "@Color" : "#FF5E5E5B",
                 "Shadow" :
                  {
                   "@BlurSize" : "0.00000",
                   "@EnableBlur" : "false",
                   "@Color" : "#FFFFFFFF"
                  }
                },
               "Background" :
                {
                 "@PPType" : "PP.LinearGradientBrush",
                 "@Angle" : "1.57080",
                 "@Opacity" : "1.00000",
                 "GradientStops" :
                  {
                   "GradientStop" :
                    [
                      {
                       "@Offset" : "0.00000",
                       "@Color" : "#FFC8C8C8"
                      },
                      {
                       "@Offset" : "1.00000",
                       "@Color" : "#A4A4A4"
                      }
                    ]
                  }
                },
               "Border" :
                {
                 "@Width" : "1.00000",
                 "@Style" : "solid",
                 "@Radius" : "0.00000",
                 "@Color" : "#FF9F9F9F"
                }
              }
            },
           "MaskText" :
            {
             "@IsAuto" : "true"
            },
           "NoDataText" :
            {
             "@IsAuto" : "true"
            }
          },
         "EndHeaderStyle" :
          {
           "@Padding" : "0.00000 0.00000 0.00000 0.00000",
           "@NoDataText" : "",
           "@TextWrapping" : "Ellipsis",
           "@Margin" : "0.00000 0.00000 0.00000 0.00000",
           "@Alignment" : "Center",
           "Style" :
            {
             "Release" :
              {
               "Font" :
                {
                 "@IsItalic" : "false",
                 "@IsUnderline" : "false",
                 "@FontFamily" : "Tahoma",
                 "@Size" : "12.00000",
                 "@IsBold" : "false",
                 "@Color" : "#FFB9B9B9",
                 "Shadow" :
                  {
                   "@BlurSize" : "0.00000",
                   "@EnableBlur" : "false",
                   "@Color" : "#FFFFFFFF"
                  }
                },
               "Background" :
                {
                 "@PPType" : "PP.LinearGradientBrush",
                 "@Angle" : "1.57080",
                 "@Opacity" : "1.00000",
                 "GradientStops" :
                  {
                   "GradientStop" :
                    [
                      {
                       "@Offset" : "0.00000",
                       "@Color" : "#FFF4F4F4"
                      },
                      {
                       "@Offset" : "1.00000",
                       "@Color" : "#E9E9E9"
                      }
                    ]
                  }
                },
               "Border" :
                {
                 "@Width" : "1.00000",
                 "@Style" : "solid",
                 "@Radius" : "0.00000",
                 "@Color" : "#FFC1C1C1"
                }
              }
            },
           "MaskText" :
            {
             "@IsAuto" : "true"
            },
           "NoDataText" :
            {
             "@IsAuto" : "true"
            }
          },
         "LabelsStyle" :
          {
           "@Padding" : "6.00000 0.00000 6.00000 0.00000",
           "@NoDataText" : "",
           "@TextWrapping" : "Hidden",
           "@Margin" : "0.00000 0.00000 0.00000 0.00000",
           "@Alignment" : "Center",
           "Style" :
            {
             "Release" :
              {
               "Font" :
                {
                 "@IsItalic" : "false",
                 "@IsUnderline" : "false",
                 "@FontFamily" : "Tahoma",
                 "@Size" : "12.00000",
                 "@IsBold" : "false",
                 "@Color" : "#FF000000"
                }
              }
            },
           "MaskText" :
            {
             "@IsAuto" : "false",
             "@Value" : "{%Name}"
            },
           "NoDataText" :
            {
             "@IsAuto" : "true"
            }
          },
         "ItemsTooltipStyle" :
          {
           "@Padding" : "6.00000 6.00000 6.00000 6.00000",
           "@HoverMode" : "MouseOver",
           "@NoDataText" : "",
           "@TextWrapping" : "NoWrap",
           "@Margin" : "0.00000 0.00000 0.00000 0.00000",
           "@Alignment" : "Left",
           "Style" :
            {
             "Release" :
              {
               "Font" :
                {
                 "@IsItalic" : "false",
                 "@IsUnderline" : "false",
                 "@FontFamily" : "Tahoma",
                 "@Size" : "13.00000",
                 "@IsBold" : "false",
                 "@Color" : "#FF918F8D"
                },
               "Background" :
                {
                 "@PPType" : "PP.SolidColorBrush",
                 "@Opacity" : "1.00000",
                 "@Color" : "#FFFFFF"
                },
               "Border" :
                {
                 "@Width" : "1.00000",
                 "@Style" : "solid",
                 "@Radius" : "0.00000",
                 "@Color" : "#FFC1C1C1"
                }
              }
            },
           "MaskText" :
            {
             "@IsAuto" : "true"
            },
           "NoDataText" :
            {
             "@IsAuto" : "true"
            }
          },
         "BranchItemsTooltipStyle" :
          {
           "@Padding" : "6.00000 6.00000 6.00000 6.00000",
           "@HoverMode" : "MouseOver",
           "@NoDataText" : "",
           "@TextWrapping" : "NoWrap",
           "@Margin" : "0.00000 0.00000 0.00000 0.00000",
           "@Alignment" : "Left",
           "Style" :
            {
             "Release" :
              {
               "Font" :
                {
                 "@IsItalic" : "false",
                 "@IsUnderline" : "false",
                 "@FontFamily" : "Tahoma",
                 "@Size" : "13.00000",
                 "@IsBold" : "false",
                 "@Color" : "#FF918F8D"
                },
               "Background" :
                {
                 "@PPType" : "PP.SolidColorBrush",
                 "@Opacity" : "1.00000",
                 "@Color" : "#FFFFFF"
                },
               "Border" :
                {
                 "@Width" : "1.00000",
                 "@Style" : "solid",
                 "@Radius" : "0.00000",
                 "@Color" : "#FFC1C1C1"
                }
              }
            },
           "MaskText" :
            {
             "@IsAuto" : "true"
            },
           "NoDataText" :
            {
             "@IsAuto" : "true"
            }
          },
         "Breadcrumb" :
          {
           "@Padding" : "1.00000 1.00000 1.00000 1.00000",
           "@VerticalAlignment" : "Top",
           "@HorizontalAlignment" : "Center",
           "@IsVisible" : "true",
           "@Margin" : "0.00000 0.00000 0.00000 0.00000",
           "Style" :
            {
             "Release" :
              {
               "Font" :
                {
                 "@IsNull" : "true"
                },
               "Background" :
                {
                 "@PPType" : "PP.SolidColorBrush",
                 "@Opacity" : "1.00000",
                 "@Color" : "#9C9C9C"
                }
              }
            },
           "ItemStyle" :
            {
             "@Padding" : "6.00000 0.00000 6.00000 0.00000",
             "@NoDataText" : "",
             "@TextWrapping" : "NoWrap",
             "@Margin" : "0.00000 0.00000 0.00000 0.00000",
             "@Alignment" : "Left",
             "Style" :
              {
               "Release" :
                {
                 "Font" :
                  {
                   "@IsItalic" : "false",
                   "@IsUnderline" : "false",
                   "@FontFamily" : "Tahoma",
                   "@Size" : "12.00000",
                   "@IsBold" : "false",
                   "@Color" : "#FFFFFFFF"
                  },
                 "Background" :
                  {
                   "@PPType" : "PP.SolidColorBrush",
                   "@Opacity" : "1.00000",
                   "@Color" : "#9C9C9C"
                  },
                 "Border" :
                  {
                   "@Width" : "1.00000",
                   "@Style" : "solid",
                   "@Radius" : "0.00000",
                   "@Color" : "#FFBABABA"
                  }
                },
               "Hover" :
                {
                 "Background" :
                  {
                   "@PPType" : "PP.LinearGradientBrush",
                   "@Angle" : "1.57080",
                   "@Opacity" : "1.00000",
                   "GradientStops" :
                    {
                     "GradientStop" :
                      [
                        {
                         "@Offset" : "0.00000",
                         "@Color" : "#FF898989"
                        },
                        {
                         "@Offset" : "1.00000",
                         "@Color" : "#959595"
                        }
                      ]
                    }
                  }
                },
               "Pressed" :
                {
                 "Background" :
                  {
                   "@PPType" : "PP.LinearGradientBrush",
                   "@Angle" : "1.57080",
                   "@Opacity" : "1.00000",
                   "GradientStops" :
                    {
                     "GradientStop" :
                      [
                        {
                         "@Offset" : "0.00000",
                         "@Color" : "#FF6C6C6C"
                        },
                        {
                         "@Offset" : "1.00000",
                         "@Color" : "#878787"
                        }
                      ]
                    }
                  }
                }
              },
             "MaskText" :
              {
               "@IsAuto" : "true"
              },
             "NoDataText" :
              {
               "@IsAuto" : "true"
              }
            }
          },
         "ColorVisual" :
          {
           "ColorMapping" :
            {
             "@Type" : "Scale",
             "@Scale" : "Scale52",
             "@Index" : "0",
             "@Format" : "#,##0.00",
             "@DataSource" : "DataSource1",
             "@DimAttributeId" : "DefaultID",
             "@Id" : "DSMapping59"
            }
          },
         "SizeVisual" :
          {
           "NumericMapping" :
            {
             "@Type" : "Transformer",
             "@Index" : "0",
             "@Format" : "",
             "@DataSource" : "DataSource1",
             "@DimAttributeId" : "DefaultID",
             "@Id" : "DSMapping3",
             "@DataTransformer" : "DataTransformer1"
            }
          },
         "HeightVisual" :
          {
           "NumericMapping" :
            {
             "@Type" : "None",
             "@Index" : "0",
             "@Format" : "",
             "@DimAttributeId" : "DefaultID",
             "@DataSource" : "DataSource1",
             "@Id" : "DSMapping4"
            }
          },
         "TextVisual" :
          {
           "TextMapping" :
            {
             "@Type" : "None",
             "@Index" : "0",
             "@Format" : "",
             "@DimAttributeId" : "DefaultID",
             "@DataSource" : "DataSource1",
             "@Id" : "DSMapping6"
            }
          },
         "StyleContainer" :
          {
           "@SCK" : "4294967295",
           "@SCT" : "0"
          },
         "Timeline" :
          {
           "@StepDuration" : "1000.00000",
           "@IsOverlap" : "false",
           "@DelayDuration" : "1000.00000",
           "@Padding" : "0.00000 0.00000 0.00000 0.00000",
           "@HorizontalAlignment" : "Center",
           "@VerticalAlignment" : "Bottom",
           "@IsVisible" : "true",
           "@LastIndexAsInitial" : "true",
           "@Inverse" : "false",
           "@ReturnToInitialState" : "true",
           "@Margin" : "10.00000 13.00000 6.00000 8.00000",
           "@CurrentStep" : "0",
           "Style" :
            {
             "Release" :
              {
               "Font" :
                {
                 "@IsItalic" : "false",
                 "@IsUnderline" : "false",
                 "@FontFamily" : "Tahoma",
                 "@Size" : "11.00000",
                 "@IsBold" : "false",
                 "@Color" : "#FF918F8D"
                }
              }
            }
          },
         "Legends" :
          {
           "Legend0" :
            {
             "@Marker" : "Circle",
             "@Type" : "Intervals",
             "@AutoColumnsCount" : "true",
             "@ColorApplying" : "Marker",
             "@NoDataVisible" : "true",
             "@CellSpacing" : "10.00000 10.00000",
             "@Mode" : "LessGreater",
             "@Visibility" : "IsDependent",
             "@Scale" : "Scale52",
             "@Format" : "#,##0.00",
             "@HoverMode" : "MouseOver",
             "@HorizontalAlignment" : "Center",
             "@TextSpacing" : "10.00000",
             "@DoHighlight" : "false",
             "@IsOuter" : "false",
             "@NoDataPosition" : "After",
             "@Id" : "Legend0",
             "@TextHorizontalAlignment" : "Left",
             "@IncludeEquals" : "true",
             "@IsOverlap" : "false",
             "@ColumnCount" : "0",
             "@Padding" : "6.00000 6.00000 6.00000 6.00000",
             "@VerticalAlignment" : "Bottom",
             "@ContentAlignment" : "Center",
             "@Margin" : "0.00000 0.00000 0.00000 0.00000",
             "@ItemsOrder" : "LeftToRight",
             "Style" :
              {
               "Release" :
                {
                 "Font" :
                  {
                   "@IsItalic" : "false",
                   "@IsUnderline" : "false",
                   "@FontFamily" : "Tahoma",
                   "@Size" : "12.00000",
                   "@IsBold" : "false",
                   "@Color" : "#FF918F8D"
                  }
                }
              },
             "EqualFormat" :
              {
               "@IsAuto" : "true"
              },
             "GreaterFormat" :
              {
               "@IsAuto" : "true"
              },
             "LessFormat" :
              {
               "@IsAuto" : "true"
              },
             "BetweenFormat" :
              {
               "@IsAuto" : "true"
              },
             "NoDataText" :
              {
               "@IsAuto" : "true"
              },
             "Header" :
              {
               "@Padding" : "0.00000 0.00000 0.00000 0.00000",
               "@IsVisible" : "true",
               "@NoDataText" : "",
               "@TextWrapping" : "NoWrap",
               "@Margin" : "0.00000 0.00000 0.00000 0.00000",
               "@Alignment" : "Center",
               "Style" :
                {
                 "Release" :
                  {
                   "Font" :
                    {
                     "@IsItalic" : "false",
                     "@IsUnderline" : "false",
                     "@FontFamily" : "Tahoma",
                     "@Size" : "12.00000",
                     "@IsBold" : "false",
                     "@Color" : "#FF918F8D"
                    }
                  }
                },
               "MaskText" :
                {
                 "@IsAuto" : "true"
                },
               "NoDataText" :
                {
                 "@IsAuto" : "true"
                },
               "Text" :
                {
                 "@IsAuto" : "false",
                 "@Value" : "Цвет: "
                }
              }
            }
          },
         "Style" :
          {
           "Release" :
            {
             "Background" :
              {
               "@PPType" : "PP.SolidColorBrush",
               "@Opacity" : "1.00000",
               "@Color" : "#FFFFFF"
              }
            }
          },
         "LegendMapping" :
          {
           "@Legend0" : "DSMapping59"
          },
         "HoverInactiveEffects" :
          {
           "Effect" :
            {
             "@PPType" : "PP.Ui.OpacityEffect",
             "@Opacity" : "0.50000"
            }
          },
         "SelectInactiveEffects" :
          {
           "Effect" :
            {
             "@PPType" : "PP.Ui.OpacityEffect",
             "@Opacity" : "0.25000"
            }
          },
         "CustomData" : "",
         "DataSources" :
          {
           "DataSource1" :
            {
             "@Title" : "",
             "@Id" : "DataSource1",
             "AttributesNames" : "",
             "Series" :
              {
               "Serie" :
                [
                  {
                   "@Id" : "1"
                  },
                  {
                   "@Id" : "2"
                  },
                  {
                   "@Id" : "3"
                  },
                  {
                   "@Id" : "4"
                  }
                ]
              }
            }
          },
         "Scales" :
          {
           "Scale52" :
            {
             "@AutoCalculable" : "true",
             "@MinValue" : "91.68919",
             "@Items" : "#FFFF462C #FFEBAF36 #FFFFD900 #FFB1CA40 #FF6A8535",
             "@InactiveItem" : "#FFFFFFFF",
             "@LogarithmBase" : "2.00000",
             "@MaxValue" : "158.10008",
             "@Mode" : "Uniform",
             "@EnableEquality" : "false",
             "@IsConstant" : "false",
             "@RoundBias" : "0.00000",
             "@NoData" : "#FFEBEBEB",
             "@TypeArguments" : "Brush",
             "@Id" : "Scale52"
            }
          },
         "Transformers" :
          {
           "DataTransformer1" :
            {
             "@PPType" : "PP.NormalizationTransformer",
             "@Type" : "Linear",
             "@MinResult" : "0.00000",
             "@MaxResult" : "1.00000",
             "@NoDataResult" : "0.00000",
             "@UseAbsoluteValues" : "false",
             "@Id" : "DataTransformer1",
             "@MinResultCut" : "0.00000"
            }
          },
         "SettingsProvider" :
          {
           "ItemsToolTipStyle" :
            {
             "@ToolTipText" : "",
             "@NoDataText" : "нет данных"
            },
           "BranchItemsToolTipStyle" :
            {
             "@ToolTipText" : "",
             "@NoDataText" : "нет данных"
            },
           "IntervalsLegendStyle" :
            {
             "@LessFormat" : "менее {0}",
             "@EqualFormat" : "равно {0}",
             "@BetweenFormat" : "от {0} до {1}",
             "@GreaterFormat" : "более {0}",
             "@NoDataText" : "нет данных"
            },
           "SizeLegendStyle" :
            {
             "@MinValueFormat" : "{0}",
             "@MaxValueFormat" : "{0}"
            }
          }
        }
      },
     "style" :
      {
       "@key" : "4294967295",
       "@sheetType" : "0"
      },
     "predefinedStyles" :
      {
       "predefinedStyleCount" : "1"
      },
     "predefinedStyle" :
      {
       "predefinedStyleIndex" : "-1"
      }
    }
  }
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


public static GetTreeMapResult GetTreeMapInfo(EaxId moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetTreeMap()
    {
        tArg = new GetTreeMapArg()
        {
            pattern = new TreeMapMdPattern()
            {
                all = true
            }
        },
        tTreeMap = new TreeMapId() { id = moniker.id + "!TreeMap" }
    };
    // Получаем настройки плоского дерева
    var result = somClient.GetTreeMap(tGet);
    return result;
}


См. также:


[Интерактивные
 визуальные компоненты](Visualizators_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
