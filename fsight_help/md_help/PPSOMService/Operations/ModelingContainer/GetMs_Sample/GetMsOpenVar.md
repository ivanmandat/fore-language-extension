# Получение данных переменной

Получение данных переменной
-


**


# Получение данных переменной


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для получения данных переменной. В запросе передается экземпляр открытого
 контейнера моделирования и шаблон для извлечения данных. В ответе
 приходит рабочая книга, содержащая данные переменной.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMs xmlns="****">
  <id>ABDCEIPPHFNBFOAEENCEKLAHPHGOOLIEGJBPFILIJAJFBPCP!M!S!CKKCPMIPPHFNBFOAELEOCFGAMOCFDJCMEOJLDMHNONLNFNAMH</id>  </tMs>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>[![](../../../minus.gif)](../../../#)<item>
  <key>89669</key>[![](../../../minus.gif)](../../../#)<problem>
[![](../../../minus.gif)](../../../#)<metamodel>
[![](../../../minus.gif)](../../../#)<visualControllerPattern>
[![](../../../minus.gif)](../../../#)<workbooks>
[![](../../../minus.gif)](../../../#)<types>
  <Item>Variable</Item>  </types>
  <key>true</key>[![](../../../minus.gif)](../../../#)<getWbkArg>
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>  <series>Get</series>[![](../../../minus.gif)](../../../#)<cellsTable>
  <headers>true</headers>[![](../../../minus.gif)](../../../#)<slots>
  <elementKey>true</elementKey>  <elementName>true</elementName>  </slots>
  <cells>true</cells>  <emptyCells>false</emptyCells>  <getCellDate>true</getCellDate>  </cellsTable>
  </pattern>
  </getWbkArg>
[![](../../../minus.gif)](../../../#)<getEaxArg>
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <dataEditState>true</dataEditState>  <dataSources>Get</dataSources>[![](../../../minus.gif)](../../../#)<gridStyle>
  <all>true</all>[![](../../../minus.gif)](../../../#)<parts>
  <it>Table</it>  </parts>
  </gridStyle>
  <grid>true</grid>  <useGridAutoAdjust>true</useGridAutoAdjust>  </pattern>
  </getEaxArg>
  </workbooks>
  <useSourceName>false</useSourceName>  <levelFormat>Short</levelFormat>  </visualControllerPattern>
  </metamodel>
  </problem>
  </item>
  </pattern>
[![](../../../minus.gif)](../../../#)<execParams>
  <scenarioKeys />
[![](../../../minus.gif)](../../../#)<execFillWithVariables>
[![](../../../minus.gif)](../../../#)<entryKeys>
  <l>2</l>  </entryKeys>
[![](../../../minus.gif)](../../../#)<scenarioKeys>
  <l>-1</l>  </scenarioKeys>
  </execFillWithVariables>
  </execParams>
  </tArg>
  </GetMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>ABDCEIPPHFNBFOAEENCEKLAHPHGOOLIEGJBPFILIJAJFBPCP!M!S!CKKCPMIPPHFNBFOAELEOCFGAMOCFDJCMEOJLDMHNONLNFNAMH</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc isShortcut="**0**" isLink="**0**" fullUrl="**http://v-shp-development.dev.fs.fsight.world/**" ver="**4**" hf="**0**">
  <i>MODELSPACE</i>  <n>Контейнер моделирования</n>  <k>1581</k>  <c>5121</c>  <p>1580</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<item>
  <k>89669</k>  <id>MODEL_NEW</id>  <n>MODEL_NEW</n>  <vis>1</vis>  <type>Problem</type>[![](../../../minus.gif)](../../../#)<problemMd>
[![](../../../minus.gif)](../../../#)<metamodel>
  <k>89670</k>[![](../../../minus.gif)](../../../#)<visualController>
[![](../../../minus.gif)](../../../#)<workbooks>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <key>92066</key>[![](../../../minus.gif)](../../../#)<getWbkResult>
[![](../../../minus.gif)](../../../#)<id>
  <id>ABDCEIPPHFNBFOAEENCEKLAHPHGOOLIEGJBPFILIJAJFBPCP!M!S!WNMLHEMPPHFNBFOAEDPJLALPEMIMEKMCEPICNJELKMOBDNFBH</id>  </id>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc isShortcut="**0**" isLink="**0**" fullUrl="**http://v-shp-development.dev.fs.fsight.world/**" ver="**1**" hf="**0**">
  <i>VARIABLESWB_89670</i>  <n>VariablesWorkBook</n>  <k>92066</k>  <c>2827</c>  <p>89669</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>0</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  <hasLaner>1</hasLaner>[![](../../../minus.gif)](../../../#)<series count="**1**">
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>OBJ1</id>  <n>MyOutputVavable|A</n>  <vis>1</vis>  <kind>Calculate</kind>  <selectedUnit />
  <tag>2|-1</tag>  <hasChildren>0</hasChildren>  <index>0</index>  <expanded>0</expanded>  <level>Year</level>  <childrenCount>0</childrenCount>  <visibleChildrenCount>0</visibleChildrenCount>  <flags>0</flags>  </it>
  </its>
  <displayDataAs>SourceValues</displayDataAs>  <autoRecalc>1</autoRecalc>  <createDerivedSeries>Default</createDerivedSeries>  <permanentData>0</permanentData>  </series>
[![](../../../minus.gif)](../../../#)<cellsTable columnCount="**31**" rowCount="**1**">
[![](../../../minus.gif)](../../../#)<columns>
[![](../../../minus.gif)](../../../#)<dims>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <id>calendar</id>  </it>
  </dims>
[![](../../../minus.gif)](../../../#)<slots>
[![](../../../minus.gif)](../../../#)<s date="**1990-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:1990</k>  <n>1990A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**1991-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:1991</k>  <n>1991A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**1992-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:1992</k>  <n>1992A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**1993-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:1993</k>  <n>1993A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**1994-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:1994</k>  <n>1994A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**1995-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:1995</k>  <n>1995A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**1996-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:1996</k>  <n>1996A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**1997-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:1997</k>  <n>1997A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**1998-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:1998</k>  <n>1998A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**1999-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:1999</k>  <n>1999A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2000-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2000</k>  <n>2000A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2001-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2001</k>  <n>2001A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2002-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2002</k>  <n>2002A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2003-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2003</k>  <n>2003A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2004-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2004</k>  <n>2004A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2005-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2005</k>  <n>2005A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2006-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2006</k>  <n>2006A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2007-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2007</k>  <n>2007A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2008-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2008</k>  <n>2008A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2009-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2009</k>  <n>2009A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2010-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2010</k>  <n>2010A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2011-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2011</k>  <n>2011A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2012-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2012</k>  <n>2012A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2013-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2013</k>  <n>2013A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2014-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2014</k>  <n>2014A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2015-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2015</k>  <n>2015A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2016-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2016</k>  <n>2016A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2017-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2017</k>  <n>2017A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2018-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2018</k>  <n>2018A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2019-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2019</k>  <n>2019A1</n>  </e>
  </els>
  </s>
[![](../../../minus.gif)](../../../#)<s date="**2020-01-01**">
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>YEARS:2020</k>  <n>2020A1</n>  </e>
  </els>
  </s>
  </slots>
  </columns>
[![](../../../minus.gif)](../../../#)<rows>
[![](../../../minus.gif)](../../../#)<dims>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <id>series</id>  </it>
  </dims>
[![](../../../minus.gif)](../../../#)<slots>
[![](../../../minus.gif)](../../../#)<s>
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <k>MyOutputVavable|A</k>  <n>MyOutputVavable|A</n>  </e>
  </els>
  </s>
  </slots>
  </rows>
[![](../../../minus.gif)](../../../#)<cells>
  <c v="**3**" dt="**3**" row="**0**" column="**0**" date="**1990-01-01**" />
  <c v="**7**" dt="**3**" row="**0**" column="**1**" date="**1991-01-01**" />
  <c v="**2**" dt="**3**" row="**0**" column="**2**" date="**1992-01-01**" />
  <c v="**6**" dt="**3**" row="**0**" column="**3**" date="**1993-01-01**" />
  <c v="**4**" dt="**3**" row="**0**" column="**4**" date="**1994-01-01**" />
  <c v="**1**" dt="**3**" row="**0**" column="**5**" date="**1995-01-01**" />
  <c v="**5**" dt="**3**" row="**0**" column="**6**" date="**1996-01-01**" />
  <c v="**3.42857143**" dt="**3**" row="**0**" column="**7**" date="**1997-01-01**" />
  <c v="**3.28571429**" dt="**3**" row="**0**" column="**8**" date="**1998-01-01**" />
  <c v="**3.14285714**" dt="**3**" row="**0**" column="**9**" date="**1999-01-01**" />
  <c v="**3**" dt="**3**" row="**0**" column="**10**" date="**2000-01-01**" />
  <c v="**2.85714286**" dt="**3**" row="**0**" column="**11**" date="**2001-01-01**" />
  <c v="**2.71428571**" dt="**3**" row="**0**" column="**12**" date="**2002-01-01**" />
  <c v="**2.57142857**" dt="**3**" row="**0**" column="**13**" date="**2003-01-01**" />
  <c v="**2.42857143**" dt="**3**" row="**0**" column="**14**" date="**2004-01-01**" />
  <c v="**2.28571429**" dt="**3**" row="**0**" column="**15**" date="**2005-01-01**" />
  <c v="**2.14285714**" dt="**3**" row="**0**" column="**16**" date="**2006-01-01**" />
  <c v="**2**" dt="**3**" row="**0**" column="**17**" date="**2007-01-01**" />
  <c v="**1.85714286**" dt="**3**" row="**0**" column="**18**" date="**2008-01-01**" />
  <c v="**1.71428571**" dt="**3**" row="**0**" column="**19**" date="**2009-01-01**" />
  <c v="**1.57142857**" dt="**3**" row="**0**" column="**20**" date="**2010-01-01**" />
  <c v="**1.42857143**" dt="**3**" row="**0**" column="**21**" date="**2011-01-01**" />
  <c v="**1.28571429**" dt="**3**" row="**0**" column="**22**" date="**2012-01-01**" />
  <c v="**1.14285714**" dt="**3**" row="**0**" column="**23**" date="**2013-01-01**" />
  <c v="**1**" dt="**3**" row="**0**" column="**24**" date="**2014-01-01**" />
  <c v="**0.85714286**" dt="**3**" row="**0**" column="**25**" date="**2015-01-01**" />
  <c v="**0.71428571**" dt="**3**" row="**0**" column="**26**" date="**2016-01-01**" />
  <c v="**0.57142857**" dt="**3**" row="**0**" column="**27**" date="**2017-01-01**" />
  </cells>
  </cellsTable>
  </meta>
  </getWbkResult>
[![](../../../minus.gif)](../../../#)<getEaxResult>
[![](../../../minus.gif)](../../../#)<id>
  <id />
  </id>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc isShortcut="**0**" isLink="**0**" fullUrl="**http://v-shp-development.dev.fs.fsight.world/**" ver="**1**" hf="**0**">
  <i>VARIABLESWB_89670</i>  <n>VariablesWorkBook</n>  <k>92066</k>  <c>2827</c>  <p>89669</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>0</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>[![](../../../minus.gif)](../../../#)<dataEditState>
  <readOnly>0</readOnly>  <modified>0</modified>  <modifiedSeries>0</modifiedSeries>  </dataEditState>
[![](../../../minus.gif)](../../../#)<dataSources>
  <its />
  </dataSources>
[![](../../../minus.gif)](../../../#)<grid>
  <visible>1</visible>  <active>1</active>  <enabled>1</enabled>  <viewScale>1</viewScale>[![](../../../minus.gif)](../../../#)<viewSize>
  <width>-1</width>  <height>-1</height>  <units>DLU96</units>  </viewSize>
  <sizeChanged>0</sizeChanged>  <viewOrder>0</viewOrder>  <available>1</available>  <syncIndicators>0</syncIndicators>[![](../../../minus.gif)](../../../#)<style>
[![](../../../minus.gif)](../../../#)<defaultStyle>
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" />
  <Font F="**Arial**" S="**8**" C="**#000000**" I="**false**" B="**false**" H="**12**" />
  <Borders />
  <Hyperlink />
  </defaultStyle>
[![](../../../minus.gif)](../../../#)<fixedCorner>
  <Text HA="**-1**" VA="**1**" WW="**1**" M="**7px 6px 8px 6px**" />
  <NumberFormat F="****" FT="**0**" />
  <Borders />
  <Hyperlink />
  </fixedCorner>
[![](../../../minus.gif)](../../../#)<topHeader>
  <Text HA="**2**" VA="**1**" WW="**1**" M="**7px 6px 8px 6px**" />
  <NumberFormat F="****" FT="**0**" />
  <Borders />
  <Hyperlink />
  </topHeader>
[![](../../../minus.gif)](../../../#)<leftHeader>
  <Text HA="**1**" VA="**1**" WW="**0**" M="**7px 6px 8px 6px**" />
  <NumberFormat F="****" FT="**0**" />
  <Borders />
  <Hyperlink />
  </leftHeader>
[![](../../../minus.gif)](../../../#)<internals>
  <Text HA="**0**" VA="**1**" WW="**1**" M="**7px 6px 8px 6px**" />
  <NumberFormat F="**#,##0.00**" FT="**1**" />
  <Borders />
  <Hyperlink />
  </internals>
[![](../../../minus.gif)](../../../#)<ABC>
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" />
  <Borders />
  <Hyperlink />
  </ABC>
[![](../../../minus.gif)](../../../#)<ABCHeader>
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" />
  <Font B="**true**" />
  <Borders />
  <Hyperlink />
  </ABCHeader>
[![](../../../minus.gif)](../../../#)<ABCTop>
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" />
  <Fill C="**#20B8F2**" />
  <Borders />
  <Hyperlink />
  </ABCTop>
[![](../../../minus.gif)](../../../#)<ABCBottom>
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" />
  <Fill C="**#FF8F45**" />
  <Borders />
  <Hyperlink />
  </ABCBottom>
[![](../../../minus.gif)](../../../#)<highlightedCells>
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" />
  <Font C="**#FF0000**" B="**true**" />
  <Borders />
  <Hyperlink />
  </highlightedCells>
[![](../../../minus.gif)](../../../#)<changedCells>
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" />
  <Font B="**true**" />
  <Borders />
  <Hyperlink />
  </changedCells>
[![](../../../minus.gif)](../../../#)<virtualCells>
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" />
  <Borders />
  <Hyperlink />
  </virtualCells>
[![](../../../minus.gif)](../../../#)<valueChange>
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" />
  <NumberFormat F="**0.00%**" FT="**4**" />
  <Borders />
  <Hyperlink />
  </valueChange>
[![](../../../minus.gif)](../../../#)<table>
  <Name>EAX table style</Name>[![](../../../minus.gif)](../../../#)<Range>
  <left>0</left>  <top>0</top>  <width>0</width>  <height>0</height>  </Range>
[![](../../../minus.gif)](../../../#)<Corner>
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" />
  <Fill C="**#EEEEEE**" />
  <Borders />
  <Hyperlink />
  </Corner>
[![](../../../minus.gif)](../../../#)<FirstRow>
  <Width>1</Width>[![](../../../minus.gif)](../../../#)<Style>
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" />
  <Fill C="**#FFFFFF**" />
  <Borders />
  <Hyperlink />
  </Style>
  </FirstRow>
[![](../../../minus.gif)](../../../#)<SecondRow>
  <Width>1</Width>[![](../../../minus.gif)](../../../#)<Style>
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" />
  <Fill C="**#F3F3F3**" />
  <Borders />
  <Hyperlink />
  </Style>
  </SecondRow>
[![](../../../minus.gif)](../../../#)<FirstColumn>
  <Width>1</Width>  </FirstColumn>
[![](../../../minus.gif)](../../../#)<SecondColumn>
  <Width>1</Width>  </SecondColumn>
[![](../../../minus.gif)](../../../#)<HeaderRow>
  <Width>0</Width>[![](../../../minus.gif)](../../../#)<Style>
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" />
  <Fill C="**#EEEEEE**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**2**" S="**0**" C="**#BBBBBB**" />
  <Border I="**5**" S="**0**" C="**#BBBBBB**" />
  <Border I="**6**" S="**0**" C="**#FFFFFF**" />
  <Border I="**7**" S="**0**" C="**#FFFFFF**" />
  </Borders>
  <Hyperlink />
  </Style>
  </HeaderRow>
[![](../../../minus.gif)](../../../#)<HeaderColumn>
  <Width>0</Width>[![](../../../minus.gif)](../../../#)<Style>
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" />
  <Fill C="**#EEEEEE**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**3**" S="**0**" C="**#BBBBBB**" />
  <Border I="**4**" S="**0**" C="**#BBBBBB**" />
  <Border I="**6**" S="**0**" C="**#FFFFFF**" />
  <Border I="**7**" S="**0**" C="**#FFFFFF**" />
  </Borders>
  <Hyperlink />
  </Style>
  </HeaderColumn>
[![](../../../minus.gif)](../../../#)<FooterRow>
  <Width>0</Width>  </FooterRow>
[![](../../../minus.gif)](../../../#)<FooterColumn>
  <Width>0</Width>  </FooterColumn>
  <PredefinedStyle>ExtGreyStriped</PredefinedStyle>  <IsEmpty>0</IsEmpty>  </table>
  <calcs />
  <internalFormatConditions />
  <totalsFormatConditions />
  <ABCFormatConditions />
  <rangeFormatConditions />
  <rangeCellStyles />
  </style>
  <transposed>0</transposed>  <displayLegend>0</displayLegend>  <displayNumbers>0</displayNumbers>  <displayGrid>0</displayGrid>  <fixHeaders>1</fixHeaders>  <fixHeadersOnPrint>1</fixHeadersOnPrint>  <rowsHierarchical>1</rowsHierarchical>  <columnsHierarchical>1</columnsHierarchical>  <rowsHierarchyIndent>-1</rowsHierarchyIndent>  <columnsHierarchyIndent>-1</columnsHierarchyIndent>  <headerTitleType>None</headerTitleType>  <headerTitleContentType>Dim</headerTitleContentType>  <headerTitle />
[![](../../../minus.gif)](../../../#)<adjust>
  <mode>Simple</mode>  <minVisibleDataColumns>1</minVisibleDataColumns>  <maxRowsInCell>2</maxRowsInCell>  </adjust>
  <isEnabledRowsGrowth>0</isEnabledRowsGrowth>  <isEnabledColsGrowth>0</isEnabledColsGrowth>  <canEnableRowsGrowth>1</canEnableRowsGrowth>  <canEnableColsGrowth>1</canEnableColsGrowth>  <dataDisplayMode>Interactive</dataDisplayMode>  <rowsSparklines>0</rowsSparklines>  <columnsSparklines>0</columnsSparklines>  <totalsSparklines>0</totalsSparklines>[![](../../../minus.gif)](../../../#)<legends>
[![](../../../minus.gif)](../../../#)<md>
[![](../../../minus.gif)](../../../#)<Legends>
[![](../../../minus.gif)](../../../#)<Legend0 ItemsOrder="**LeftToRight**" NoDataVisible="**true**" Visibility="**Visible**" Format="**#,##0.00**" HorizontalAlignment="**Right**" HoverMode="**MouseOver**" TextSpacing="**3.00000**" IsOuter="**true**" DoHighlight="**false**" NoDataPosition="**After**" Id="**Legend0**" TextHorizontalAlignment="**Left**" IncludeEquals="**true**" Margin="**0.00000 0.00000 0.00000 0.00000**" Type="**Intervals**" Marker="**Custom**" AutoColumnsCount="**true**" ColorApplying="**Marker**" CellSpacing="**5.00000 5.00000**" Mode="**LessGreater**" IsOverlap="**false**" ColumnCount="**1**" Padding="**6.00000 6.00000 6.00000 6.00000**" VerticalAlignment="**Top**" ContentAlignment="**Center**">
[![](../../../minus.gif)](../../../#)<Style>
[![](../../../minus.gif)](../../../#)<Release>
  <Font Size="**12.00000**" IsBold="**false**" Color="**#FF505050**" FontFamily="**Calibri**" IsItalic="**false**" IsUnderline="**false**" />
  <Background Color="**#EFEFEF**" Opacity="**1.00000**" PPType="**PP.SolidColorBrush**" />
  </Release>
  </Style>
  <EqualFormat IsAuto="**true**" />
  <MarkerImage ResourceId="**TRANSPARENT**" />
  <MarkerImageMask ResourceId="**TEXTCOLORLEGENDICON**" />
  <GreaterFormat IsAuto="**true**" />
  <LessFormat IsAuto="**true**" />
  <BetweenFormat IsAuto="**true**" />
  <NoDataText IsAuto="**true**" />
[![](../../../minus.gif)](../../../#)<Header NoDataText="****" TextWrapping="**WrapWithEllipsis**" Margin="**0.00000 0.00000 0.00000 11.00000**" Padding="**0.00000 0.00000 0.00000 0.00000**" Alignment="**Center**" IsVisible="**true**">
[![](../../../minus.gif)](../../../#)<Style>
[![](../../../minus.gif)](../../../#)<Release>
  <Font Size="**12.00000**" IsBold="**false**" Color="**#FF505050**" FontFamily="**Calibri**" IsItalic="**false**" IsUnderline="**false**" />
  </Release>
  </Style>
  <MaskText IsAuto="**true**" />
  <NoDataText IsAuto="**true**" />
  <Text IsAuto="**true**" />
  </Header>
  </Legend0>
[![](../../../minus.gif)](../../../#)<Legend1 Margin="**0.00000 0.00000 0.00000 0.00000**" MinValue="**0.00000**" Type="**Size**" Marker="**Custom**" MaxValue="**0.00000**" Visibility="**Visible**" HorizontalAlignment="**Right**" Format="****" TextSpacing="**10.00000**" IsOuter="**true**" Id="**Legend1**" IsOverlap="**false**" Padding="**6.00000 6.00000 6.00000 6.00000**" VerticalAlignment="**Top**">
[![](../../../minus.gif)](../../../#)<Style>
[![](../../../minus.gif)](../../../#)<Release>
  <Font Size="**12.00000**" IsBold="**false**" Color="**#FF505050**" FontFamily="**Calibri**" IsItalic="**false**" IsUnderline="**false**" />
  <Background Color="**#EFEFEF**" Opacity="**1.00000**" PPType="**PP.SolidColorBrush**" />
  </Release>
  </Style>
  <MaxValueFormat IsAuto="**false**" Value="**{0:0.00}**" />
  <MinValueFormat IsAuto="**false**" Value="**{0:0.00}**" />
  <MinMarkerImage Width="**32**" Height="**32**" Source="**data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACHSURBVFhH7ZHBCYAwEASvBWvJX1DSQlqwBVuwBVuwJ1uwBd2Vi4gvQbzXDiwx62P0zoQQQogvtF2/IatfY4E4U47sSPI6DkhnZEIWnl7HASnHn5CBz17HAGGpUpwNwjXk82UEkHH8lN4TswaI+Mccf/GK3cjOr/9C8VOGe13D9VFCCCHEO8wOnREwX6ApumAAAAAASUVORK5CYII=**" />
  <MaxMarkerImage Width="**32**" Height="**32**" Source="**data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFQSURBVFhH7Zb9DYIwEMVZwRVcwf9NNK7ACqzACqzgCq7gCqzACqygv5KredaPtNCamPCSC3C9vgd37ZVqxYq/xP5wbLGbWG1DvwGCY/ACVxsqD8ROgbi3rYWUBUJnEdX71kLKAZEN5tN/xTQbvYWVAyKNCE5fzFXXw24KLAUELiI21ZxrJ75uCiwByF36vdAj3dxrGQZz5wfkuvefFhzPWoaTufMC4l5EnrYcz1qGs7nzwQmKwMtqx6dlcNnY2FAeQPgx/R74tQx5WzOEg5C/3Wr4tQwXcy8HZFHNJohzlqcMEOmXfW23jGsZ8rTmgDTFlrdmSOqANNWWnZAQaOuNSilx2i/ml4HJ2nqdRS0q4nTLzm/NTNaTL3pbERu++LzWzER33nuSxtxRIF5Ll35CMklbb3JrJV6zN5o7HkzS1Z98uDBH/5yc/eZ/ccUfoqru/Rsv7haParsAAAAASUVORK5CYII=**" />
[![](../../../minus.gif)](../../../#)<Header NoDataText="****" TextWrapping="**WrapWithEllipsis**" Margin="**0.00000 0.00000 0.00000 11.00000**" Padding="**0.00000 0.00000 0.00000 0.00000**" Alignment="**Center**" IsVisible="**true**">
[![](../../../minus.gif)](../../../#)<Style>
[![](../../../minus.gif)](../../../#)<Release>
  <Font Size="**12.00000**" IsBold="**false**" Color="**#FF505050**" FontFamily="**Calibri**" IsItalic="**false**" IsUnderline="**false**" />
  </Release>
  </Style>
  <MaskText IsAuto="**true**" />
  <NoDataText IsAuto="**true**" />
  <Text IsAuto="**true**" />
  </Header>
  </Legend1>
[![](../../../minus.gif)](../../../#)<Legend2 ItemsOrder="**LeftToRight**" NoDataVisible="**true**" Visibility="**Visible**" Format="****" HorizontalAlignment="**Right**" HoverMode="**MouseOver**" TextSpacing="**3.00000**" IsOuter="**true**" DoHighlight="**false**" NoDataPosition="**After**" Id="**Legend2**" TextHorizontalAlignment="**Left**" IncludeEquals="**true**" Margin="**0.00000 0.00000 0.00000 0.00000**" Type="**Intervals**" Marker="**Rectangle**" AutoColumnsCount="**true**" ColorApplying="**Marker**" CellSpacing="**5.00000 5.00000**" Mode="**LessGreater**" IsOverlap="**false**" ColumnCount="**1**" Padding="**6.00000 6.00000 6.00000 6.00000**" VerticalAlignment="**Top**" ContentAlignment="**Center**">
[![](../../../minus.gif)](../../../#)<Style>
[![](../../../minus.gif)](../../../#)<Release>
  <Font Size="**12.00000**" IsBold="**false**" Color="**#FF505050**" FontFamily="**Calibri**" IsItalic="**false**" IsUnderline="**false**" />
  <Background Color="**#EFEFEF**" Opacity="**1.00000**" PPType="**PP.SolidColorBrush**" />
  </Release>
  </Style>
  <EqualFormat IsAuto="**true**" />
  <GreaterFormat IsAuto="**true**" />
  <LessFormat IsAuto="**true**" />
  <BetweenFormat IsAuto="**true**" />
  <NoDataText IsAuto="**true**" />
[![](../../../minus.gif)](../../../#)<Header NoDataText="****" TextWrapping="**WrapWithEllipsis**" Margin="**0.00000 0.00000 0.00000 11.00000**" Padding="**0.00000 0.00000 0.00000 0.00000**" Alignment="**Center**" IsVisible="**true**">
[![](../../../minus.gif)](../../../#)<Style>
[![](../../../minus.gif)](../../../#)<Release>
  <Font Size="**12.00000**" IsBold="**false**" Color="**#FF505050**" FontFamily="**Calibri**" IsItalic="**false**" IsUnderline="**false**" />
  </Release>
  </Style>
  <MaskText IsAuto="**true**" />
  <NoDataText IsAuto="**true**" />
  <Text IsAuto="**true**" />
  </Header>
  </Legend2>
[![](../../../minus.gif)](../../../#)<Legend3 Margin="**0.00000 0.00000 0.00000 0.00000**" MinValue="**6.00000**" Type="**Size**" Marker="**Custom**" MaxValue="**18.00000**" Visibility="**Visible**" HorizontalAlignment="**Center**" Format="**# ##0,00**" TextSpacing="**10.00000**" IsOuter="**true**" Id="**Legend3**" IsOverlap="**false**" Padding="**6.00000 6.00000 6.00000 6.00000**" VerticalAlignment="**Center**">
[![](../../../minus.gif)](../../../#)<Style>
[![](../../../minus.gif)](../../../#)<Release>
  <Font Size="**12.00000**" IsBold="**false**" Color="**#FF505050**" FontFamily="**Calibri**" IsItalic="**false**" IsUnderline="**false**" />
  <Background Color="**#EFEFEF**" Opacity="**1.00000**" PPType="**PP.SolidColorBrush**" />
  </Release>
  </Style>
  <MaxValueFormat IsAuto="**false**" Value="**18,00**" />
  <MinValueFormat IsAuto="**false**" Value="**6,00**" />
  <MinMarkerImage Width="**32**" Height="**32**" Source="**data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEBSURBVFhHxZMxD8FQFIX9PgmrsAqTRGIWk0FYxY4ZiwU7Ozs/oIOx4+W85MojZ6rnGL6092t77+ltWjKzv0KlEiqVUKmESiVUKqFSCZVKqFRCpRIqlVCphMqY5nBzf2IFubOeMVTGoFGe54XAs5/9PqEyxgMcjyc7Xy6WZZnNF0vb7Q/BxzWu4/x6u6UNgIblSjU0R5BavRGGeTCvcc90NrP+YJB+AxgO/I2brfbbBlB3e71X0KQBMATNAVbtA3FcrTevGsNH43HYQvINYNXAzxHKv7XXwO9JFqAz2YZGBfn+N/w1VCqhUgmVSqhUQqUSKpVQqYRKJVQqoVIJlTqs9AAV/Pr88/9WbQAAAABJRU5ErkJggg==**" />
  <MaxMarkerImage Width="**32**" Height="**32**" Source="**data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAErSURBVFhH7ZWxTgJBFEX3E/wiEyxNoCXaEqxMTKgNFQXB1tCDtdrYKD320MMHbEG55ZP7zCRvhxuMJlwoLM7uzpk3M3dfNtnCzI4KlUqoVEKlEiqVUKmESiVUKqFSCZVKis7g9WzLZouJ2cQAVlWVFJzpAXD5D8ACTKZPdt64sNV67eP21bWPwfNLvT6fWyyXdtls+fiu16vVJvYGeP+Y+UJsEAPEmkg+h/Cd7o0/I0jaI/JjB7AoD4AxNsQbxtp8DsANRyMPE2sTvw6QQGfu+/2ay+fm80/vAALgXpblTu1BA+D+OB77wdgDgfLavQHwIWFhAi1Nz3gjhEJrcVA6JM7F9X/uwKE5rQC3D28uxHz/C3A5JlQqoVIJlUqoVEKlEiqVUKmESh1WfAE6KHMXvxr0twAAAABJRU5ErkJggg==**" />
[![](../../../minus.gif)](../../../#)<Header NoDataText="****" TextWrapping="**WrapWithEllipsis**" Margin="**0.00000 0.00000 0.00000 11.00000**" Padding="**0.00000 0.00000 0.00000 0.00000**" Alignment="**Center**" IsVisible="**true**">
[![](../../../minus.gif)](../../../#)<Style>
[![](../../../minus.gif)](../../../#)<Release>
  <Font Size="**12.00000**" IsBold="**false**" Color="**#FF505050**" FontFamily="**Calibri**" IsItalic="**false**" IsUnderline="**false**" />
  </Release>
  </Style>
  <MaskText IsAuto="**true**" />
  <NoDataText IsAuto="**true**" />
  <Text IsAuto="**false**" Value="**Значение: **" />
  </Header>
  </Legend3>
  </Legends>
  </md>
[![](../../../minus.gif)](../../../#)<legendAssignment>
[![](../../../minus.gif)](../../../#)<it>
  <Key>Value</Key>[![](../../../minus.gif)](../../../#)<Value>
  <index>3</index>  <id>Legend3</id>  </Value>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <Key>BackgroundColor</Key>[![](../../../minus.gif)](../../../#)<Value>
  <index>2</index>  <id>Legend2</id>  </Value>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <Key>FontColor</Key>[![](../../../minus.gif)](../../../#)<Value>
  <index>0</index>  <id>Legend0</id>  </Value>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <Key>FontSize</Key>[![](../../../minus.gif)](../../../#)<Value>
  <index>1</index>  <id>Legend1</id>  </Value>
  </it>
  </legendAssignment>
  </legends>
  <hyperlinksAsText>0</hyperlinksAsText>[![](../../../minus.gif)](../../../#)<footnotesOptions>
  <position>None</position>  <percentWidth>-1</percentWidth>  <percentHeight>-1</percentHeight>  </footnotesOptions>
  <highlightEvaluatedCells>0</highlightEvaluatedCells>  </grid>
  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  </meta>
  </getEaxResult>
  </Item>
  </its>
  </workbooks>
  <userRPath />
  <isRExist>0</isRExist>  </visualController>
[![](../../../minus.gif)](../../../#)<suppressEmptyFilter>
  <suppressEmpty>0</suppressEmpty>  <suppressEmptyArea>SerieBounds</suppressEmptyArea>  </suppressEmptyFilter>
  <readOnly>0</readOnly>  <variableTestUseR>0</variableTestUseR>  <calculateIdentOnFact>0</calculateIdentOnFact>  </metamodel>
  <useScenarios>0</useScenarios>  <readOnly>0</readOnly>  </problemMd>
  </item>
  </meta>
  </GetMsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetMs" :
  {
   "tMs" :
    {
     "id" : "ABDCEIPPHFNBFOAEENCEKLAHPHGOOLIEGJBPFILIJAJFBPCP!M!S!CKKCPMIPPHFNBFOAELEOCFGAMOCFDJCMEOJLDMHNONLNFNAMH"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "item" :
        {
         "key" : "89669",
         "problem" :
          {
           "metamodel" :
            {
             "visualControllerPattern" :
              {
               "workbooks" :
                {
                 "types" :
                  {
                   "Item" : "Variable"
                  },
                 "key" : "true",
                 "getWbkArg" :
                  {
                   "pattern" :
                    {
                     "obInst" : "true",
                     "useGridAutoAdjust" : "true",
                     "series" : "Get",
                     "cellsTable" :
                      {
                       "headers" : "true",
                       "slots" :
                        {
                         "elementKey" : "true",
                         "elementName" : "true"
                        },
                       "cells" : "true",
                       "emptyCells" : "false",
                       "getCellDate" : "true"
                      }
                    }
                  },
                 "getEaxArg" :
                  {
                   "pattern" :
                    {
                     "obInst" : "true",
                     "dataEditState" : "true",
                     "dataSources" : "Get",
                     "gridStyle" :
                      {
                       "all" : "true",
                       "parts" :
                        {
                         "it" : "Table"
                        }
                      },
                     "grid" : "true",
                     "useGridAutoAdjust" : "true"
                    }
                  }
                },
               "useSourceName" : "false",
               "levelFormat" : "Short"
              }
            }
          }
        }
      },
     "execParams" :
      {
       "scenarioKeys" : "",
       "execFillWithVariables" :
        {
         "entryKeys" :
          {
           "l" : "2"
          },
         "scenarioKeys" :
          {
           "l" : "-1"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetMsResult" :
  {
   "id" :
    {
     "id" : "ABDCEIPPHFNBFOAEENCEKLAHPHGOOLIEGJBPFILIJAJFBPCP!M!S!CKKCPMIPPHFNBFOAELEOCFGAMOCFDJCMEOJLDMHNONLNFNAMH"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@fullUrl" : "http:\/\/v-shp-development.dev.fs.fsight.world\/",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "4",
         "@hf" : "0",
         "i" : "MODELSPACE",
         "n" : "Контейнер моделирования",
         "k" : "1581",
         "c" : "5121",
         "p" : "1580",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "item" :
      {
       "k" : "89669",
       "id" : "MODEL_NEW",
       "n" : "MODEL_NEW",
       "vis" : "1",
       "type" : "Problem",
       "problemMd" :
        {
         "metamodel" :
          {
           "k" : "89670",
           "visualController" :
            {
             "workbooks" :
              {
               "its" :
                {
                 "Item" :
                  {
                   "key" : "92066",
                   "getWbkResult" :
                    {
                     "id" :
                      {
                       "id" : "ABDCEIPPHFNBFOAEENCEKLAHPHGOOLIEGJBPFILIJAJFBPCP!M!S!WNMLHEMPPHFNBFOAEDPJLALPEMIMEKMCEPICNJELKMOBDNFBH"
                      },
                     "meta" :
                      {
                       "obInst" :
                        {
                         "obDesc" :
                          {
                           "@fullUrl" : "http:\/\/v-shp-development.dev.fs.fsight.world\/",
                           "@isShortcut" : "0",
                           "@isLink" : "0",
                           "@ver" : "1",
                           "@hf" : "0",
                           "i" : "VARIABLESWB_89670",
                           "n" : "VariablesWorkBook",
                           "k" : "92066",
                           "c" : "2827",
                           "p" : "89669",
                           "h" : "0",
                           "hasPrv" : "0",
                           "ic" : "0",
                           "isPermanent" : "0",
                           "isTemp" : "0"
                          }
                        },
                       "dirty" : "1",
                       "windowsPosition" : "Vertical",
                       "hasPivot" : "0",
                       "hasLaner" : "1",
                       "series" :
                        {
                         "@count" : "1",
                         "its" :
                          {
                           "it" :
                            [
                              {
                               "k" : "1",
                               "id" : "OBJ1",
                               "n" : "MyOutputVavable|A",
                               "vis" : "1",
                               "kind" : "Calculate",
                               "selectedUnit" : "",
                               "tag" : "2|-1",
                               "hasChildren" : "0",
                               "index" : "0",
                               "expanded" : "0",
                               "level" : "Year",
                               "childrenCount" : "0",
                               "visibleChildrenCount" : "0",
                               "flags" : "0"
                              }
                            ]
                          },
                         "displayDataAs" : "SourceValues",
                         "autoRecalc" : "1",
                         "createDerivedSeries" : "Default",
                         "permanentData" : "0"
                        },
                       "cellsTable" :
                        {
                         "@rowCount" : "1",
                         "@columnCount" : "31",
                         "columns" :
                          {
                           "dims" :
                            {
                             "it" :
                              {
                               "k" : "0",
                               "id" : "calendar"
                              }
                            },
                           "slots" :
                            {
                             "s" :
                              [
                                {
                                 "@date" : "1990-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1990",
                                     "n" : "1990A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "1991-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1991",
                                     "n" : "1991A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "1992-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1992",
                                     "n" : "1992A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "1993-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1993",
                                     "n" : "1993A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "1994-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1994",
                                     "n" : "1994A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "1995-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1995",
                                     "n" : "1995A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "1996-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1996",
                                     "n" : "1996A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "1997-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1997",
                                     "n" : "1997A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "1998-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1998",
                                     "n" : "1998A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "1999-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1999",
                                     "n" : "1999A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2000-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2000",
                                     "n" : "2000A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2001-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2001",
                                     "n" : "2001A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2002-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2002",
                                     "n" : "2002A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2003-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2003",
                                     "n" : "2003A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2004-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2004",
                                     "n" : "2004A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2005-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2005",
                                     "n" : "2005A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2006-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2006",
                                     "n" : "2006A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2007-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2007",
                                     "n" : "2007A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2008-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2008",
                                     "n" : "2008A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2009-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2009",
                                     "n" : "2009A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2010-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2010",
                                     "n" : "2010A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2011-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2011",
                                     "n" : "2011A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2012-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2012",
                                     "n" : "2012A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2013-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2013",
                                     "n" : "2013A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2014-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2014",
                                     "n" : "2014A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2015-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2015",
                                     "n" : "2015A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2016-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2016",
                                     "n" : "2016A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2017-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2017",
                                     "n" : "2017A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2018-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2018",
                                     "n" : "2018A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2019-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2019",
                                     "n" : "2019A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2020-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:2020",
                                     "n" : "2020A1"
                                    }
                                  }
                                }
                              ]
                            }
                          },
                         "rows" :
                          {
                           "dims" :
                            {
                             "it" :
                              {
                               "k" : "0",
                               "id" : "series"
                              }
                            },
                           "slots" :
                            {
                             "s" :
                              {
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "MyOutputVavable|A",
                                   "n" : "MyOutputVavable|A"
                                  }
                                }
                              }
                            }
                          },
                         "cells" :
                          {
                           "c" :
                            [
                              {
                               "@v" : "3",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "0",
                               "@date" : "1990-01-01"
                              },
                              {
                               "@v" : "7",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "1",
                               "@date" : "1991-01-01"
                              },
                              {
                               "@v" : "2",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "2",
                               "@date" : "1992-01-01"
                              },
                              {
                               "@v" : "6",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "3",
                               "@date" : "1993-01-01"
                              },
                              {
                               "@v" : "4",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "4",
                               "@date" : "1994-01-01"
                              },
                              {
                               "@v" : "1",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "5",
                               "@date" : "1995-01-01"
                              },
                              {
                               "@v" : "5",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "6",
                               "@date" : "1996-01-01"
                              },
                              {
                               "@v" : "3.42857143",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "7",
                               "@date" : "1997-01-01"
                              },
                              {
                               "@v" : "3.28571429",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "8",
                               "@date" : "1998-01-01"
                              },
                              {
                               "@v" : "3.14285714",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "9",
                               "@date" : "1999-01-01"
                              },
                              {
                               "@v" : "3",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "10",
                               "@date" : "2000-01-01"
                              },
                              {
                               "@v" : "2.85714286",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "11",
                               "@date" : "2001-01-01"
                              },
                              {
                               "@v" : "2.71428571",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "12",
                               "@date" : "2002-01-01"
                              },
                              {
                               "@v" : "2.57142857",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "13",
                               "@date" : "2003-01-01"
                              },
                              {
                               "@v" : "2.42857143",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "14",
                               "@date" : "2004-01-01"
                              },
                              {
                               "@v" : "2.28571429",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "15",
                               "@date" : "2005-01-01"
                              },
                              {
                               "@v" : "2.14285714",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "16",
                               "@date" : "2006-01-01"
                              },
                              {
                               "@v" : "2",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "17",
                               "@date" : "2007-01-01"
                              },
                              {
                               "@v" : "1.85714286",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "18",
                               "@date" : "2008-01-01"
                              },
                              {
                               "@v" : "1.71428571",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "19",
                               "@date" : "2009-01-01"
                              },
                              {
                               "@v" : "1.57142857",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "20",
                               "@date" : "2010-01-01"
                              },
                              {
                               "@v" : "1.42857143",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "21",
                               "@date" : "2011-01-01"
                              },
                              {
                               "@v" : "1.28571429",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "22",
                               "@date" : "2012-01-01"
                              },
                              {
                               "@v" : "1.14285714",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "23",
                               "@date" : "2013-01-01"
                              },
                              {
                               "@v" : "1",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "24",
                               "@date" : "2014-01-01"
                              },
                              {
                               "@v" : "0.85714286",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "25",
                               "@date" : "2015-01-01"
                              },
                              {
                               "@v" : "0.71428571",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "26",
                               "@date" : "2016-01-01"
                              },
                              {
                               "@v" : "0.57142857",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "27",
                               "@date" : "2017-01-01"
                              }
                            ]
                          }
                        }
                      }
                    },
                   "getEaxResult" :
                    {
                     "id" :
                      {
                       "id" : ""
                      },
                     "meta" :
                      {
                       "obInst" :
                        {
                         "obDesc" :
                          {
                           "@fullUrl" : "http:\/\/v-shp-development.dev.fs.fsight.world\/",
                           "@isShortcut" : "0",
                           "@isLink" : "0",
                           "@ver" : "1",
                           "@hf" : "0",
                           "i" : "VARIABLESWB_89670",
                           "n" : "VariablesWorkBook",
                           "k" : "92066",
                           "c" : "2827",
                           "p" : "89669",
                           "h" : "0",
                           "hasPrv" : "0",
                           "ic" : "0",
                           "isPermanent" : "0",
                           "isTemp" : "0"
                          }
                        },
                       "dirty" : "1",
                       "dataEditState" :
                        {
                         "readOnly" : "0",
                         "modified" : "0",
                         "modifiedSeries" : "0"
                        },
                       "dataSources" :
                        {
                         "its" : ""
                        },
                       "grid" :
                        {
                         "visible" : "1",
                         "active" : "1",
                         "enabled" : "1",
                         "viewScale" : "1",
                         "viewSize" :
                          {
                           "width" : "-1",
                           "height" : "-1",
                           "units" : "DLU96"
                          },
                         "sizeChanged" : "0",
                         "viewOrder" : "0",
                         "available" : "1",
                         "syncIndicators" : "0",
                         "style" :
                          {
                           "defaultStyle" :
                            {
                             "Text" :
                              {
                               "@VA" : "-1",
                               "@HA" : "-1",
                               "@M" : "-1 -1 -1 -1",
                               "@WW" : "-1"
                              },
                             "Font" :
                              {
                               "@B" : "false",
                               "@S" : "8",
                               "@C" : "#000000",
                               "@F" : "Arial",
                               "@H" : "12",
                               "@I" : "false"
                              },
                             "Borders" : "",
                             "Hyperlink" : ""
                            },
                           "fixedCorner" :
                            {
                             "Text" :
                              {
                               "@VA" : "1",
                               "@HA" : "-1",
                               "@M" : "7px 6px 8px 6px",
                               "@WW" : "1"
                              },
                             "NumberFormat" :
                              {
                               "@F" : "",
                               "@FT" : "0"
                              },
                             "Borders" : "",
                             "Hyperlink" : ""
                            },
                           "topHeader" :
                            {
                             "Text" :
                              {
                               "@VA" : "1",
                               "@HA" : "2",
                               "@M" : "7px 6px 8px 6px",
                               "@WW" : "1"
                              },
                             "NumberFormat" :
                              {
                               "@F" : "",
                               "@FT" : "0"
                              },
                             "Borders" : "",
                             "Hyperlink" : ""
                            },
                           "leftHeader" :
                            {
                             "Text" :
                              {
                               "@VA" : "1",
                               "@HA" : "1",
                               "@M" : "7px 6px 8px 6px",
                               "@WW" : "0"
                              },
                             "NumberFormat" :
                              {
                               "@F" : "",
                               "@FT" : "0"
                              },
                             "Borders" : "",
                             "Hyperlink" : ""
                            },
                           "internals" :
                            {
                             "Text" :
                              {
                               "@VA" : "1",
                               "@HA" : "0",
                               "@M" : "7px 6px 8px 6px",
                               "@WW" : "1"
                              },
                             "NumberFormat" :
                              {
                               "@F" : "#,##0.00",
                               "@FT" : "1"
                              },
                             "Borders" : "",
                             "Hyperlink" : ""
                            },
                           "ABC" :
                            {
                             "Text" :
                              {
                               "@VA" : "-1",
                               "@HA" : "-1",
                               "@M" : "-1 -1 -1 -1",
                               "@WW" : "-1"
                              },
                             "Borders" : "",
                             "Hyperlink" : ""
                            },
                           "ABCHeader" :
                            {
                             "Text" :
                              {
                               "@VA" : "-1",
                               "@HA" : "-1",
                               "@M" : "-1 -1 -1 -1",
                               "@WW" : "-1"
                              },
                             "Font" :
                              {
                               "@B" : "true"
                              },
                             "Borders" : "",
                             "Hyperlink" : ""
                            },
                           "ABCTop" :
                            {
                             "Text" :
                              {
                               "@VA" : "-1",
                               "@HA" : "-1",
                               "@M" : "-1 -1 -1 -1",
                               "@WW" : "-1"
                              },
                             "Fill" :
                              {
                               "@C" : "#20B8F2"
                              },
                             "Borders" : "",
                             "Hyperlink" : ""
                            },
                           "ABCBottom" :
                            {
                             "Text" :
                              {
                               "@VA" : "-1",
                               "@HA" : "-1",
                               "@M" : "-1 -1 -1 -1",
                               "@WW" : "-1"
                              },
                             "Fill" :
                              {
                               "@C" : "#FF8F45"
                              },
                             "Borders" : "",
                             "Hyperlink" : ""
                            },
                           "highlightedCells" :
                            {
                             "Text" :
                              {
                               "@VA" : "-1",
                               "@HA" : "-1",
                               "@M" : "-1 -1 -1 -1",
                               "@WW" : "-1"
                              },
                             "Font" :
                              {
                               "@B" : "true",
                               "@C" : "#FF0000"
                              },
                             "Borders" : "",
                             "Hyperlink" : ""
                            },
                           "changedCells" :
                            {
                             "Text" :
                              {
                               "@VA" : "-1",
                               "@HA" : "-1",
                               "@M" : "-1 -1 -1 -1",
                               "@WW" : "-1"
                              },
                             "Font" :
                              {
                               "@B" : "true"
                              },
                             "Borders" : "",
                             "Hyperlink" : ""
                            },
                           "virtualCells" :
                            {
                             "Text" :
                              {
                               "@VA" : "-1",
                               "@HA" : "-1",
                               "@M" : "-1 -1 -1 -1",
                               "@WW" : "-1"
                              },
                             "Borders" : "",
                             "Hyperlink" : ""
                            },
                           "valueChange" :
                            {
                             "Text" :
                              {
                               "@VA" : "-1",
                               "@HA" : "-1",
                               "@M" : "-1 -1 -1 -1",
                               "@WW" : "-1"
                              },
                             "NumberFormat" :
                              {
                               "@F" : "0.00%",
                               "@FT" : "4"
                              },
                             "Borders" : "",
                             "Hyperlink" : ""
                            },
                           "table" :
                            {
                             "Name" : "EAX table style",
                             "Range" :
                              {
                               "left" : "0",
                               "top" : "0",
                               "width" : "0",
                               "height" : "0"
                              },
                             "Corner" :
                              {
                               "Text" :
                                {
                                 "@VA" : "-1",
                                 "@HA" : "-1",
                                 "@M" : "-1 -1 -1 -1",
                                 "@WW" : "-1"
                                },
                               "Fill" :
                                {
                                 "@C" : "#EEEEEE"
                                },
                               "Borders" : "",
                               "Hyperlink" : ""
                              },
                             "FirstRow" :
                              {
                               "Width" : "1",
                               "Style" :
                                {
                                 "Text" :
                                  {
                                   "@VA" : "-1",
                                   "@HA" : "-1",
                                   "@M" : "-1 -1 -1 -1",
                                   "@WW" : "-1"
                                  },
                                 "Fill" :
                                  {
                                   "@C" : "#FFFFFF"
                                  },
                                 "Borders" : "",
                                 "Hyperlink" : ""
                                }
                              },
                             "SecondRow" :
                              {
                               "Width" : "1",
                               "Style" :
                                {
                                 "Text" :
                                  {
                                   "@VA" : "-1",
                                   "@HA" : "-1",
                                   "@M" : "-1 -1 -1 -1",
                                   "@WW" : "-1"
                                  },
                                 "Fill" :
                                  {
                                   "@C" : "#F3F3F3"
                                  },
                                 "Borders" : "",
                                 "Hyperlink" : ""
                                }
                              },
                             "FirstColumn" :
                              {
                               "Width" : "1"
                              },
                             "SecondColumn" :
                              {
                               "Width" : "1"
                              },
                             "HeaderRow" :
                              {
                               "Width" : "0",
                               "Style" :
                                {
                                 "Text" :
                                  {
                                   "@VA" : "-1",
                                   "@HA" : "-1",
                                   "@M" : "-1 -1 -1 -1",
                                   "@WW" : "-1"
                                  },
                                 "Fill" :
                                  {
                                   "@C" : "#EEEEEE"
                                  },
                                 "Borders" :
                                  {
                                   "Border" :
                                    [
                                      {
                                       "@S" : "0",
                                       "@C" : "#BBBBBB",
                                       "@I" : "2"
                                      },
                                      {
                                       "@S" : "0",
                                       "@C" : "#BBBBBB",
                                       "@I" : "5"
                                      },
                                      {
                                       "@S" : "0",
                                       "@C" : "#FFFFFF",
                                       "@I" : "6"
                                      },
                                      {
                                       "@S" : "0",
                                       "@C" : "#FFFFFF",
                                       "@I" : "7"
                                      }
                                    ]
                                  },
                                 "Hyperlink" : ""
                                }
                              },
                             "HeaderColumn" :
                              {
                               "Width" : "0",
                               "Style" :
                                {
                                 "Text" :
                                  {
                                   "@VA" : "-1",
                                   "@HA" : "-1",
                                   "@M" : "-1 -1 -1 -1",
                                   "@WW" : "-1"
                                  },
                                 "Fill" :
                                  {
                                   "@C" : "#EEEEEE"
                                  },
                                 "Borders" :
                                  {
                                   "Border" :
                                    [
                                      {
                                       "@S" : "0",
                                       "@C" : "#BBBBBB",
                                       "@I" : "3"
                                      },
                                      {
                                       "@S" : "0",
                                       "@C" : "#BBBBBB",
                                       "@I" : "4"
                                      },
                                      {
                                       "@S" : "0",
                                       "@C" : "#FFFFFF",
                                       "@I" : "6"
                                      },
                                      {
                                       "@S" : "0",
                                       "@C" : "#FFFFFF",
                                       "@I" : "7"
                                      }
                                    ]
                                  },
                                 "Hyperlink" : ""
                                }
                              },
                             "FooterRow" :
                              {
                               "Width" : "0"
                              },
                             "FooterColumn" :
                              {
                               "Width" : "0"
                              },
                             "PredefinedStyle" : "ExtGreyStriped",
                             "IsEmpty" : "0"
                            },
                           "calcs" : "",
                           "internalFormatConditions" : "",
                           "totalsFormatConditions" : "",
                           "ABCFormatConditions" : "",
                           "rangeFormatConditions" : "",
                           "rangeCellStyles" : ""
                          },
                         "transposed" : "0",
                         "displayLegend" : "0",
                         "displayNumbers" : "0",
                         "displayGrid" : "0",
                         "fixHeaders" : "1",
                         "fixHeadersOnPrint" : "1",
                         "rowsHierarchical" : "1",
                         "columnsHierarchical" : "1",
                         "rowsHierarchyIndent" : "-1",
                         "columnsHierarchyIndent" : "-1",
                         "headerTitleType" : "None",
                         "headerTitleContentType" : "Dim",
                         "headerTitle" : "",
                         "adjust" :
                          {
                           "mode" : "Simple",
                           "minVisibleDataColumns" : "1",
                           "maxRowsInCell" : "2"
                          },
                         "isEnabledRowsGrowth" : "0",
                         "isEnabledColsGrowth" : "0",
                         "canEnableRowsGrowth" : "1",
                         "canEnableColsGrowth" : "1",
                         "dataDisplayMode" : "Interactive",
                         "rowsSparklines" : "0",
                         "columnsSparklines" : "0",
                         "totalsSparklines" : "0",
                         "legends" :
                          {
                           "md" :
                            {
                             "Legends" :
                              {
                               "Legend0" :
                                {
                                 "@Marker" : "Custom",
                                 "@Type" : "Intervals",
                                 "@AutoColumnsCount" : "true",
                                 "@ColorApplying" : "Marker",
                                 "@NoDataVisible" : "true",
                                 "@CellSpacing" : "5.00000 5.00000",
                                 "@Mode" : "LessGreater",
                                 "@Visibility" : "Visible",
                                 "@HoverMode" : "MouseOver",
                                 "@HorizontalAlignment" : "Right",
                                 "@Format" : "#,##0.00",
                                 "@TextSpacing" : "3.00000",
                                 "@DoHighlight" : "false",
                                 "@IsOuter" : "true",
                                 "@NoDataPosition" : "After",
                                 "@Id" : "Legend0",
                                 "@TextHorizontalAlignment" : "Left",
                                 "@IncludeEquals" : "true",
                                 "@IsOverlap" : "false",
                                 "@ColumnCount" : "1",
                                 "@Padding" : "6.00000 6.00000 6.00000 6.00000",
                                 "@VerticalAlignment" : "Top",
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
                                       "@FontFamily" : "Calibri",
                                       "@Size" : "12.00000",
                                       "@IsBold" : "false",
                                       "@Color" : "#FF505050"
                                      },
                                     "Background" :
                                      {
                                       "@PPType" : "PP.SolidColorBrush",
                                       "@Opacity" : "1.00000",
                                       "@Color" : "#EFEFEF"
                                      }
                                    }
                                  },
                                 "EqualFormat" :
                                  {
                                   "@IsAuto" : "true"
                                  },
                                 "MarkerImage" :
                                  {
                                   "@ResourceId" : "TRANSPARENT"
                                  },
                                 "MarkerImageMask" :
                                  {
                                   "@ResourceId" : "TEXTCOLORLEGENDICON"
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
                                   "@TextWrapping" : "WrapWithEllipsis",
                                   "@Margin" : "0.00000 0.00000 0.00000 11.00000",
                                   "@Alignment" : "Center",
                                   "Style" :
                                    {
                                     "Release" :
                                      {
                                       "Font" :
                                        {
                                         "@IsItalic" : "false",
                                         "@IsUnderline" : "false",
                                         "@FontFamily" : "Calibri",
                                         "@Size" : "12.00000",
                                         "@IsBold" : "false",
                                         "@Color" : "#FF505050"
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
                                     "@IsAuto" : "true"
                                    }
                                  }
                                },
                               "Legend1" :
                                {
                                 "@MinValue" : "0.00000",
                                 "@Type" : "Size",
                                 "@Marker" : "Custom",
                                 "@MaxValue" : "0.00000",
                                 "@IsOverlap" : "false",
                                 "@Padding" : "6.00000 6.00000 6.00000 6.00000",
                                 "@Visibility" : "Visible",
                                 "@HorizontalAlignment" : "Right",
                                 "@Format" : "",
                                 "@VerticalAlignment" : "Top",
                                 "@TextSpacing" : "10.00000",
                                 "@IsOuter" : "true",
                                 "@Id" : "Legend1",
                                 "@Margin" : "0.00000 0.00000 0.00000 0.00000",
                                 "Style" :
                                  {
                                   "Release" :
                                    {
                                     "Font" :
                                      {
                                       "@IsItalic" : "false",
                                       "@IsUnderline" : "false",
                                       "@FontFamily" : "Calibri",
                                       "@Size" : "12.00000",
                                       "@IsBold" : "false",
                                       "@Color" : "#FF505050"
                                      },
                                     "Background" :
                                      {
                                       "@PPType" : "PP.SolidColorBrush",
                                       "@Opacity" : "1.00000",
                                       "@Color" : "#EFEFEF"
                                      }
                                    }
                                  },
                                 "MaxValueFormat" :
                                  {
                                   "@IsAuto" : "false",
                                   "@Value" : "{0:0.00}"
                                  },
                                 "MinValueFormat" :
                                  {
                                   "@IsAuto" : "false",
                                   "@Value" : "{0:0.00}"
                                  },
                                 "MinMarkerImage" :
                                  {
                                   "@Width" : "32",
                                   "@Source" : "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACHSURBVFhH7ZHBCYAwEASvBWvJX1DSQlqwBVuwBVuwJ1uwBd2Vi4gvQbzXDiwx62P0zoQQQogvtF2\/IatfY4E4U47sSPI6DkhnZEIWnl7HASnHn5CBz17HAGGpUpwNwjXk82UEkHH8lN4TswaI+Mccf\/GK3cjOr\/9C8VOGe13D9VFCCCHEO8wOnREwX6ApumAAAAAASUVORK5CYII=",
                                   "@Height" : "32"
                                  },
                                 "MaxMarkerImage" :
                                  {
                                   "@Width" : "32",
                                   "@Source" : "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFQSURBVFhH7Zb9DYIwEMVZwRVcwf9NNK7ACqzACqzgCq7gCqzACqygv5KredaPtNCamPCSC3C9vgd37ZVqxYq\/xP5wbLGbWG1DvwGCY\/ACVxsqD8ROgbi3rYWUBUJnEdX71kLKAZEN5tN\/xTQbvYWVAyKNCE5fzFXXw24KLAUELiI21ZxrJ75uCiwByF36vdAj3dxrGQZz5wfkuvefFhzPWoaTufMC4l5EnrYcz1qGs7nzwQmKwMtqx6dlcNnY2FAeQPgx\/R74tQx5WzOEg5C\/3Wr4tQwXcy8HZFHNJohzlqcMEOmXfW23jGsZ8rTmgDTFlrdmSOqANNWWnZAQaOuNSilx2i\/ml4HJ2nqdRS0q4nTLzm\/NTNaTL3pbERu++LzWzER33nuSxtxRIF5Ll35CMklbb3JrJV6zN5o7HkzS1Z98uDBH\/5yc\/eZ\/ccUfoqru\/Rsv7haParsAAAAASUVORK5CYII=",
                                   "@Height" : "32"
                                  },
                                 "Header" :
                                  {
                                   "@Padding" : "0.00000 0.00000 0.00000 0.00000",
                                   "@IsVisible" : "true",
                                   "@NoDataText" : "",
                                   "@TextWrapping" : "WrapWithEllipsis",
                                   "@Margin" : "0.00000 0.00000 0.00000 11.00000",
                                   "@Alignment" : "Center",
                                   "Style" :
                                    {
                                     "Release" :
                                      {
                                       "Font" :
                                        {
                                         "@IsItalic" : "false",
                                         "@IsUnderline" : "false",
                                         "@FontFamily" : "Calibri",
                                         "@Size" : "12.00000",
                                         "@IsBold" : "false",
                                         "@Color" : "#FF505050"
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
                                     "@IsAuto" : "true"
                                    }
                                  }
                                },
                               "Legend2" :
                                {
                                 "@Marker" : "Rectangle",
                                 "@Type" : "Intervals",
                                 "@AutoColumnsCount" : "true",
                                 "@ColorApplying" : "Marker",
                                 "@NoDataVisible" : "true",
                                 "@CellSpacing" : "5.00000 5.00000",
                                 "@Mode" : "LessGreater",
                                 "@Visibility" : "Visible",
                                 "@HoverMode" : "MouseOver",
                                 "@HorizontalAlignment" : "Right",
                                 "@Format" : "",
                                 "@TextSpacing" : "3.00000",
                                 "@DoHighlight" : "false",
                                 "@IsOuter" : "true",
                                 "@NoDataPosition" : "After",
                                 "@Id" : "Legend2",
                                 "@TextHorizontalAlignment" : "Left",
                                 "@IncludeEquals" : "true",
                                 "@IsOverlap" : "false",
                                 "@ColumnCount" : "1",
                                 "@Padding" : "6.00000 6.00000 6.00000 6.00000",
                                 "@VerticalAlignment" : "Top",
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
                                       "@FontFamily" : "Calibri",
                                       "@Size" : "12.00000",
                                       "@IsBold" : "false",
                                       "@Color" : "#FF505050"
                                      },
                                     "Background" :
                                      {
                                       "@PPType" : "PP.SolidColorBrush",
                                       "@Opacity" : "1.00000",
                                       "@Color" : "#EFEFEF"
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
                                   "@TextWrapping" : "WrapWithEllipsis",
                                   "@Margin" : "0.00000 0.00000 0.00000 11.00000",
                                   "@Alignment" : "Center",
                                   "Style" :
                                    {
                                     "Release" :
                                      {
                                       "Font" :
                                        {
                                         "@IsItalic" : "false",
                                         "@IsUnderline" : "false",
                                         "@FontFamily" : "Calibri",
                                         "@Size" : "12.00000",
                                         "@IsBold" : "false",
                                         "@Color" : "#FF505050"
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
                                     "@IsAuto" : "true"
                                    }
                                  }
                                },
                               "Legend3" :
                                {
                                 "@MinValue" : "6.00000",
                                 "@Type" : "Size",
                                 "@Marker" : "Custom",
                                 "@MaxValue" : "18.00000",
                                 "@IsOverlap" : "false",
                                 "@Padding" : "6.00000 6.00000 6.00000 6.00000",
                                 "@Visibility" : "Visible",
                                 "@HorizontalAlignment" : "Center",
                                 "@Format" : "# ##0,00",
                                 "@VerticalAlignment" : "Center",
                                 "@TextSpacing" : "10.00000",
                                 "@IsOuter" : "true",
                                 "@Id" : "Legend3",
                                 "@Margin" : "0.00000 0.00000 0.00000 0.00000",
                                 "Style" :
                                  {
                                   "Release" :
                                    {
                                     "Font" :
                                      {
                                       "@IsItalic" : "false",
                                       "@IsUnderline" : "false",
                                       "@FontFamily" : "Calibri",
                                       "@Size" : "12.00000",
                                       "@IsBold" : "false",
                                       "@Color" : "#FF505050"
                                      },
                                     "Background" :
                                      {
                                       "@PPType" : "PP.SolidColorBrush",
                                       "@Opacity" : "1.00000",
                                       "@Color" : "#EFEFEF"
                                      }
                                    }
                                  },
                                 "MaxValueFormat" :
                                  {
                                   "@IsAuto" : "false",
                                   "@Value" : "18,00"
                                  },
                                 "MinValueFormat" :
                                  {
                                   "@IsAuto" : "false",
                                   "@Value" : "6,00"
                                  },
                                 "MinMarkerImage" :
                                  {
                                   "@Width" : "32",
                                   "@Source" : "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEBSURBVFhHxZMxD8FQFIX9PgmrsAqTRGIWk0FYxY4ZiwU7Ozs\/oIOx4+W85MojZ6rnGL6092t77+ltWjKzv0KlEiqVUKmESiVUKqFSCZVKqFRCpRIqlVCphMqY5nBzf2IFubOeMVTGoFGe54XAs5\/9PqEyxgMcjyc7Xy6WZZnNF0vb7Q\/BxzWu4\/x6u6UNgIblSjU0R5BavRGGeTCvcc90NrP+YJB+AxgO\/I2brfbbBlB3e71X0KQBMATNAVbtA3FcrTevGsNH43HYQvINYNXAzxHKv7XXwO9JFqAz2YZGBfn+N\/w1VCqhUgmVSqhUQqUSKpVQqYRKJVQqoVIJlTqs9AAV\/Pr88\/9WbQAAAABJRU5ErkJggg==",
                                   "@Height" : "32"
                                  },
                                 "MaxMarkerImage" :
                                  {
                                   "@Width" : "32",
                                   "@Source" : "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAErSURBVFhH7ZWxTgJBFEX3E\/wiEyxNoCXaEqxMTKgNFQXB1tCDtdrYKD320MMHbEG55ZP7zCRvhxuMJlwoLM7uzpk3M3dfNtnCzI4KlUqoVEKlEiqVUKmESiVUKqFSCZVKis7g9WzLZouJ2cQAVlWVFJzpAXD5D8ACTKZPdt64sNV67eP21bWPwfNLvT6fWyyXdtls+fiu16vVJvYGeP+Y+UJsEAPEmkg+h\/Cd7o0\/I0jaI\/JjB7AoD4AxNsQbxtp8DsANRyMPE2sTvw6QQGfu+\/2ay+fm80\/vAALgXpblTu1BA+D+OB77wdgDgfLavQHwIWFhAi1Nz3gjhEJrcVA6JM7F9X\/uwKE5rQC3D28uxHz\/C3A5JlQqoVIJlUqoVEKlEiqVUKmESh1WfAE6KHMXvxr0twAAAABJRU5ErkJggg==",
                                   "@Height" : "32"
                                  },
                                 "Header" :
                                  {
                                   "@Padding" : "0.00000 0.00000 0.00000 0.00000",
                                   "@IsVisible" : "true",
                                   "@NoDataText" : "",
                                   "@TextWrapping" : "WrapWithEllipsis",
                                   "@Margin" : "0.00000 0.00000 0.00000 11.00000",
                                   "@Alignment" : "Center",
                                   "Style" :
                                    {
                                     "Release" :
                                      {
                                       "Font" :
                                        {
                                         "@IsItalic" : "false",
                                         "@IsUnderline" : "false",
                                         "@FontFamily" : "Calibri",
                                         "@Size" : "12.00000",
                                         "@IsBold" : "false",
                                         "@Color" : "#FF505050"
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
                                     "@Value" : "Значение: "
                                    }
                                  }
                                }
                              }
                            },
                           "legendAssignment" :
                            {
                             "it" :
                              [
                                {
                                 "Key" : "Value",
                                 "Value" :
                                  {
                                   "index" : "3",
                                   "id" : "Legend3"
                                  }
                                },
                                {
                                 "Key" : "BackgroundColor",
                                 "Value" :
                                  {
                                   "index" : "2",
                                   "id" : "Legend2"
                                  }
                                },
                                {
                                 "Key" : "FontColor",
                                 "Value" :
                                  {
                                   "index" : "0",
                                   "id" : "Legend0"
                                  }
                                },
                                {
                                 "Key" : "FontSize",
                                 "Value" :
                                  {
                                   "index" : "1",
                                   "id" : "Legend1"
                                  }
                                }
                              ]
                            }
                          },
                         "hyperlinksAsText" : "0",
                         "footnotesOptions" :
                          {
                           "position" : "None",
                           "percentWidth" : "-1",
                           "percentHeight" : "-1"
                          },
                         "highlightEvaluatedCells" : "0"
                        },
                       "windowsPosition" : "Vertical",
                       "hasPivot" : "0"
                      }
                    }
                  }
                }
              },
             "userRPath" : "",
             "isRExist" : "0"
            },
           "suppressEmptyFilter" :
            {
             "suppressEmpty" : "0",
             "suppressEmptyArea" : "SerieBounds"
            },
           "readOnly" : "0",
           "variableTestUseR" : "0",
           "calculateIdentOnFact" : "0"
          },
         "useScenarios" : "0",
         "readOnly" : "0"
        }
      }
    }
  }
}


public static LnSerie GetMsOpenVar(MsId ms, uint modelKey, MsModel eq)
{
    // Получаем входную переменую
    MsFormulaTransformVariable inp = eq.transform.inputs.its.GetValue(0) as MsFormulaTransformVariable;
    var getMsOp = new GetMs()
    {
        tMs = ms,
        tArg = new GetMsArg()
        {  // Задаём шаблон получения данных
            pattern = new MsMdPattern()
            {
                item = new MsItemPattern()
                {  // Указываем ключ модели
                    key = modelKey,
                    problem = new MsProblemPattern()
                    {
                        metamodel = new MsMetaModelPattern()
                        {   // Задаём шаблон для визуального построения метамодели
                            visualControllerPattern = new MsMetaModelVisualControllerPattern()
                            {
                                levelFormat = MsLevelFormat.Short,
                                useSourceName = false,
                                workbooks = new MsWorkbookPattern()
                                {
                                    key = true,
                                    types = new MsWorkbookType[]
                                    {
                                        MsWorkbookType.Variable
                                    },
                                    // Задаём шаблон извлечения внутреннего экспресс-представления
                                    getEaxArg = new GetEaxMdArg()
                                    {
                                        pattern = new EaxMdPattern()
                                        {
                                            dataEditState = true,
                                            dataSources = ListOperation.Get,
                                            grid = true,
                                            gridStyle = new EaxGridStylePattern()
                                            {
                                                all = true,
                                                parts = new EaxGridStylePart[]
                                                {
                                                    EaxGridStylePart.Table
                                                }
                                            }
                                        }
                                    },
                                    // Задаём шаблон извлечения внутренней рабочей книги
                                    getWbkArg = new GetWbkMdArg()
                                    {
                                        pattern = new WbkMdPattern()
                                        {
                                            cellsTable = new WbkCellsTablePattern()
                                            {
                                                headers = true,
                                                slots = new PvtSlotPattern()
                                                {
                                                    elementKey = true,
                                                    elementName = true
                                                },
                                                cells = true,
                                                emptyCells = false,
                                            },
                                            series = ListOperation.Get
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            // Задаём параметры выполнения операции
            execParams = new MsMdExecParams()
            {
                scenarioKeys = new long[] { },
                //slice = model.metamodel.visualController.freeVariables.its.GetValue(0) as MsFormulaTransformSlice,
                execFillWithVariables = new MsMdExecFillWithVariables()
                {
                    entryKeys = new long[]
                    {
                        (long)inp.k
                    },
                    scenarioKeys = new long[]
                    {
                        -1
                    },
                }
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Открываем переменную
    GetMsResult getMsResult = somClient.GetMs(getMsOp);
    MsMd k = getMsResult.meta;
    // Выводим данные переменной
    MsMetaModelVisualController metaVC = getMsResult.meta.item.problemMd.metamodel.visualController;
    MsWorkbook wbk = metaVC.workbooks.its.GetValue(0) as MsWorkbook;
    WbkMd meta = wbk.getWbkResult.meta;
    LnSerie series = meta.series.its.GetValue(0) as LnSerie;
    Console.WriteLine("Переменная:" + series.n);
    WbkCellsTable table = meta.cellsTable;
    int ar = table.cells.Length;
    Console.WriteLine("Дата - Значение");
    for (int i = 0; i     {
        Console.Write((table.cells.GetValue(i) as PvtTableCell).date + " - ");
        Console.WriteLine((table.cells.GetValue(i) as PvtTableCell).v);
    };

    return series;
}


См. также:


[GetMs: Операция](../GetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
