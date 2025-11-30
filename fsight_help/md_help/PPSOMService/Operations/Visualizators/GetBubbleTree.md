# GetBubbleTree: Операция

GetBubbleTree: Операция
-


**


# GetBubbleTree


## Синтаксис


GetBubbleTreeResult GetBubbleTree(BubbleTreeId tBubbleTree,
 GetBubbleTreeArg tArg)


## Параметры


tBubbleTree. Моникёр пузырькового
 дерева;


tArg. Параметры извлечения
 настроек пузырькового дерева.


## Описание


Операция GetBubbleTree извлекает
 настройки пузырькового дерева.


## Комментарии


Для выполнения операции укажите в поле tBubbleTree
 моникёр пузырькового дерева, а в поле tArg
 параметры, в соответствии с которыми будут извлекаться настройки. Моникёр
 может быть сформирован на базе моникёра экспресс-отчета по следующему
 правилу: «Моникёр открытого экземпляра
 экспресс-отчета»!BubbleTree.


## Пример


Ниже приведен пример использования операции GetBubbleTree
 для получения настроек пузырькового дерева. В запросе передается моникёр
 пузырькового дерева, в ответе приходят запрошенные настройки.


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetBubbleTree xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBubbleTree xmlns="****">
  <id>S1!M!S!E2!BubbleTree</id>  </tBubbleTree>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <all>true</all>  </pattern>
  </tArg>
  </GetBubbleTree>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetBubbleTreeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!E2!BubbleTree</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<md>
[![](../../minus.gif)](../../#)<BubbleTree UseItemColorForToolTipBorder="**true**" PS="**-1**" UseSelectOnRightClick="**true**" AnimationDuration="**1000.00000**" Alignment="**Right**" LabelAutoColor="**true**">
[![](../../minus.gif)](../../#)<InnerLabelsStyle NoDataText="****" TextWrapping="**NoWrap**" Margin="**0.00000 0.00000 0.00000 0.00000**" Padding="**0.00000 0.00000 0.00000 0.00000**" Alignment="**Center**">
[![](../../minus.gif)](../../#)<Style>
[![](../../minus.gif)](../../#)<Release>
  <Font Size="**12.00000**" IsBold="**false**" Color="**#FF8C8C8C**" FontFamily="**Tahoma**" IsItalic="**false**" IsUnderline="**false**" />
  </Release>
  </Style>
  <MaskText IsAuto="**true**" />
  <NoDataText IsAuto="**true**" />
  </InnerLabelsStyle>
[![](../../minus.gif)](../../#)<OuterLabelsStyle NoDataText="****" TextWrapping="**NoWrap**" Margin="**0.00000 0.00000 0.00000 0.00000**" Padding="**6.00000 6.00000 6.00000 6.00000**" Alignment="**Center**">
[![](../../minus.gif)](../../#)<Style>
[![](../../minus.gif)](../../#)<Release>
  <Font Size="**12.00000**" IsBold="**false**" Color="**#FF9C9B9B**" FontFamily="**Tahoma**" IsItalic="**false**" IsUnderline="**false**" />
  <Background Color="**#FFFFFF**" Opacity="**0.50196**" PPType="**PP.SolidColorBrush**" />
  <Border Color="**#FFC1C1C1**" Width="**1.00000**" Radius="**4.00000**" Style="**solid**" />
  </Release>
  </Style>
  <MaskText IsAuto="**false**" Value="**{%Name}**" />
  <NoDataText IsAuto="**true**" />
  </OuterLabelsStyle>
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
[![](../../minus.gif)](../../#)<Model ActiveItem="**VISUALIZER_TOTAL_ID**">
[![](../../minus.gif)](../../#)<RootItem Id="**VISUALIZER_TOTAL_ID**">
[![](../../minus.gif)](../../#)<Items Id="**1**">
[![](../../minus.gif)](../../#)<Items Id="**2**">
  <Items Id="**3**" />
  </Items>
  </Items>
  <Items Id="**4**" />
  </RootItem>
  </Model>
[![](../../minus.gif)](../../#)<ItemsNames>
  <Item Value="**Третий элемент**" Key="**3**" />
  <Item Value="**Четвертый элемент**" Key="**4**" />
  <Item Value="**Dim_1**" Key="**VISUALIZER_TOTAL_ID**" />
  <Item Value="**Первый элемент**" Key="**1**" />
  <Item Value="**Второй элемент**" Key="**2**" />
  </ItemsNames>
  <OrbitsPen Color="**#FFE0E0E0**" Width="**2.00000**" Style="**solid**" />
[![](../../minus.gif)](../../#)<ColorVisual>
  <ColorMapping DataSource="**DataSource0**" DimAttributeId="**DefaultID**" Id="**DSMapping56**" Type="**Scale**" Scale="**Scale50**" Index="**0**" Format="**#,##0.00**" />
  </ColorVisual>
  <StyleContainer SCK="**4294967295**" SCT="**0**" />
[![](../../minus.gif)](../../#)<Timeline Inverse="**false**" ReturnToInitialState="**true**" Margin="**10.00000 13.00000 6.00000 8.00000**" CurrentStep="**0**" StepDuration="**1000.00000**" IsOverlap="**false**" DelayDuration="**1000.00000**" Padding="**0.00000 0.00000 0.00000 0.00000**" HorizontalAlignment="**Center**" VerticalAlignment="**Bottom**" IsVisible="**true**" LastIndexAsInitial="**true**">
[![](../../minus.gif)](../../#)<Style>
[![](../../minus.gif)](../../#)<Release>
  <Font Size="**11.00000**" IsBold="**false**" Color="**#FF918F8D**" FontFamily="**Tahoma**" IsItalic="**false**" IsUnderline="**false**" />
  </Release>
  </Style>
  </Timeline>
[![](../../minus.gif)](../../#)<Legends>
[![](../../minus.gif)](../../#)<Legend0 ItemsOrder="**LeftToRight**" NoDataVisible="**true**" Visibility="**IsDependent**" HorizontalAlignment="**Center**" HoverMode="**MouseOver**" Format="**#,##0.00**" TextSpacing="**10.00000**" IsOuter="**false**" DoHighlight="**false**" NoDataPosition="**After**" Id="**Legend0**" TextHorizontalAlignment="**Left**" IncludeEquals="**true**" Margin="**0.00000 0.00000 0.00000 0.00000**" Type="**Intervals**" Marker="**Circle**" AutoColumnsCount="**true**" ColorApplying="**Marker**" CellSpacing="**10.00000 10.00000**" Mode="**LessGreater**" Scale="**Scale50**" IsOverlap="**false**" ColumnCount="**0**" Padding="**6.00000 6.00000 6.00000 6.00000**" VerticalAlignment="**Bottom**" ContentAlignment="**Center**">
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
  <LegendMapping Legend0="**DSMapping56**" />
[![](../../minus.gif)](../../#)<HoverInactiveEffects>
  <Effect Opacity="**0.50000**" PPType="**PP.Ui.OpacityEffect**" />
  </HoverInactiveEffects>
[![](../../minus.gif)](../../#)<SelectInactiveEffects>
  <Effect Opacity="**0.25000**" PPType="**PP.Ui.OpacityEffect**" />
  </SelectInactiveEffects>
  <CustomData />
[![](../../minus.gif)](../../#)<DataSources>
[![](../../minus.gif)](../../#)<DataSource0 Id="**DataSource0**" Title="****">
[![](../../minus.gif)](../../#)<AttributesNames>
  <Item Value="****" Key="**DefaultID**" />
  </AttributesNames>
[![](../../minus.gif)](../../#)<Series>
[![](../../minus.gif)](../../#)<Serie Id="**1**">
  <DefaultID Items="**113.46752 **" />
  </Serie>
[![](../../minus.gif)](../../#)<Serie Id="**2**">
  <DefaultID Items="**153.72571 **" />
  </Serie>
[![](../../minus.gif)](../../#)<Serie Id="**3**">
  <DefaultID Items="**158.10008 **" />
  </Serie>
[![](../../minus.gif)](../../#)<Serie Id="**4**">
  <DefaultID Items="**91.68919 **" />
  </Serie>
  </Series>
  </DataSource0>
  </DataSources>
[![](../../minus.gif)](../../#)<Scales>
  <Scale50 AutoCalculable="**true**" MinValue="**91.68919**" Items="**#FFFF462C #FFEBAF36 #FFFFD900 #FFB1CA40 #FF6A8535**" InactiveItem="**#FFFFFFFF**" LogarithmBase="**2.00000**" MaxValue="**158.10008**" Mode="**Uniform**" IsConstant="**false**" RoundBias="**0.00000**" Id="**Scale50**" EnableEquality="**false**" NoData="**#FFEBEBEB**" TypeArguments="**Brush**" />
  </Scales>
[![](../../minus.gif)](../../#)<SettingsProvider>
  <ItemsToolTipStyle NoDataText="**нет данных**" ToolTipText="**{%Name}: {%ColorValue}**" />
  <IntervalsLegendStyle BetweenFormat="**от {0} до {1}**" GreaterFormat="**более {0}**" NoDataText="**нет данных**" LessFormat="**менее {0}**" EqualFormat="**равно {0}**" />
  <SizeLegendStyle MaxValueFormat="**{0}**" MinValueFormat="**{0}**" />
  </SettingsProvider>
  </BubbleTree>
  </md>
  <style key="**4294967295**" sheetType="**0**" />
[![](../../minus.gif)](../../#)<predefinedStyles>
  <predefinedStyleCount>1</predefinedStyleCount>  </predefinedStyles>
[![](../../minus.gif)](../../#)<predefinedStyle>
  <predefinedStyleIndex>-1</predefinedStyleIndex>  </predefinedStyle>
  </meta>
  </GetBubbleTreeResult>
  </soapenv:Body>
  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "GetBubbleTree" :
  {
   "tBubbleTree" :
    {
     "id" : "S1!M!S!E2!BubbleTree"
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
 "GetBubbleTreeResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!E2!BubbleTree"
    },
   "meta" :
    {
     "md" :
      {
       "BubbleTree" :
        {
         "@PS" : "-1",
         "@AnimationDuration" : "1000.00000",
         "@LabelAutoColor" : "true",
         "@UseItemColorForToolTipBorder" : "true",
         "@UseSelectOnRightClick" : "true",
         "@Alignment" : "Right",
         "InnerLabelsStyle" :
          {
           "@Padding" : "0.00000 0.00000 0.00000 0.00000",
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
                 "@Color" : "#FF8C8C8C"
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
         "OuterLabelsStyle" :
          {
           "@Padding" : "6.00000 6.00000 6.00000 6.00000",
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
                 "@Color" : "#FF9C9B9B"
                },
               "Background" :
                {
                 "@PPType" : "PP.SolidColorBrush",
                 "@Opacity" : "0.50196",
                 "@Color" : "#FFFFFF"
                },
               "Border" :
                {
                 "@Width" : "1.00000",
                 "@Style" : "solid",
                 "@Radius" : "4.00000",
                 "@Color" : "#FFC1C1C1"
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
         "Model" :
          {
           "@ActiveItem" : "VISUALIZER_TOTAL_ID",
           "RootItem" :
            {
             "@Id" : "VISUALIZER_TOTAL_ID",
             "Items" :
              [
                {
                 "@Id" : "1",
                 "Items" :
                  {
                   "@Id" : "2",
                   "Items" :
                    {
                     "@Id" : "3"
                    }
                  }
                },
                {
                 "@Id" : "4"
                }
              ]
            }
          },
         "ItemsNames" :
          {
           "Item" :
            [
              {
               "@Key" : "3",
               "@Value" : "Третий элемент"
              },
              {
               "@Key" : "4",
               "@Value" : "Четвертый элемент"
              },
              {
               "@Key" : "VISUALIZER_TOTAL_ID",
               "@Value" : "Dim_1"
              },
              {
               "@Key" : "1",
               "@Value" : "Первый элемент"
              },
              {
               "@Key" : "2",
               "@Value" : "Второй элемент"
              }
            ]
          },
         "OrbitsPen" :
          {
           "@Width" : "2.00000",
           "@Style" : "solid",
           "@Color" : "#FFE0E0E0"
          },
         "ColorVisual" :
          {
           "ColorMapping" :
            {
             "@Type" : "Scale",
             "@Scale" : "Scale50",
             "@Index" : "0",
             "@Format" : "#,##0.00",
             "@DataSource" : "DataSource0",
             "@DimAttributeId" : "DefaultID",
             "@Id" : "DSMapping56"
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
             "@Scale" : "Scale50",
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
           "@Legend0" : "DSMapping56"
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
           "DataSource0" :
            {
             "@Title" : "",
             "@Id" : "DataSource0",
             "AttributesNames" :
              {
               "Item" :
                {
                 "@Key" : "DefaultID",
                 "@Value" : ""
                }
              },
             "Series" :
              {
               "Serie" :
                [
                  {
                   "@Id" : "1",
                   "DefaultID" :
                    {
                     "@Items" : "113.46752 "
                    }
                  },
                  {
                   "@Id" : "2",
                   "DefaultID" :
                    {
                     "@Items" : "153.72571 "
                    }
                  },
                  {
                   "@Id" : "3",
                   "DefaultID" :
                    {
                     "@Items" : "158.10008 "
                    }
                  },
                  {
                   "@Id" : "4",
                   "DefaultID" :
                    {
                     "@Items" : "91.68919 "
                    }
                  }
                ]
              }
            }
          },
         "Scales" :
          {
           "Scale50" :
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
             "@Id" : "Scale50"
            }
          },
         "SettingsProvider" :
          {
           "ItemsToolTipStyle" :
            {
             "@ToolTipText" : "{%Name}: {%ColorValue}",
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


public static GetBubbleTreeResult GetBubbleTreeInfo(EaxId moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetBubbleTree()
    {
        tArg = new GetBubbleTreeArg()
        {
            pattern = new BubbleTreeMdPattern()
            {
                all = true
            }
        },
        tBubbleTree = new BubbleTreeId() { id = moniker.id + "!BubbleTree" }
    };
    // Получаем настройки пузырькового дерева
    var result = somClient.GetBubbleTree(tGet);
    return result;
}


См. также:


[Интерактивные
 визуальные компоненты](Visualizators_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
