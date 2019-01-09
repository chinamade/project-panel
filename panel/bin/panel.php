#! /usr/bin/env php
<?php
/**
 * Created by SlimApp.
 *
 * Date: 2019-01-07
 * Time: 10:44
 */


use GoldSdk\Panel\Panel;

/** @var Panel $app */
$app = require_once __DIR__ . "/../bootstrap.php";

$app->getConsoleApplication()->run();

